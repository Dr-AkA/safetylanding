
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { decrypt } from "@/lib/crypto";
export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1>Hello {session?.user?.name}</h1>
    </div>
  );
}
