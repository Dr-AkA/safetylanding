import { AuthOptions, SessionStrategy } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { comparePassword } from "./auth"
import { hash, decrypt } from "@/lib/crypto"
import { getPrisma } from '@/lib/prisma';

const prisma = getPrisma();  

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
     async authorize(
  credentials: Record<"email" | "password", string> | undefined,
  req: any
): Promise<{ id: string; name: string; email: string } | null> {
  if (!credentials?.email || !credentials?.password) {
    return null;
  }

  try {
    const hashedEmail = hash(credentials.email);
    const user = await prisma.admin.findUnique({
      where: { hashEmail: hashedEmail }
    });

    if (!user) return null;

    const isValid = await comparePassword(credentials.password, user.password);
    if (!isValid) return null;

    return {
      id: user.id.toString(),
      name: decrypt(user.name),
      email: decrypt(user.email),
    };
  } catch (error) {
    console.error("Authentication error:", error);
    return null;
  }

      },
    }),
  ],
  pages: {
    signIn: '/schimal',
  },
  session: {
    strategy: 'jwt' as SessionStrategy,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
