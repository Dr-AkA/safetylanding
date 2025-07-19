import 'dotenv/config';
import { PrismaClient } from '@/generated/prisma';
import { encrypt,hash } from '../src/lib/crypto';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

(async () => {
  try {
    const defaultEmail = process.env.DEFAULT_ADMIN_EMAIL;
    const defaultName = process.env.DEFAULT_ADMIN_NAME;
    const defaultPassword = process.env.DEFAULT_ADMIN_PASSWORD;

    if (!defaultEmail || !defaultName || !defaultPassword) {
      console.error('Missing env vars');
      process.exit(1);
    }

    const encryptedEmail = encrypt(defaultEmail);
    const encryptedName = encrypt(defaultName);
    const hashedPassword = await bcrypt.hash(defaultPassword, 10);
    const hashedEmail=hash(defaultEmail);

    const existing = await prisma.admin.findFirst({
      where: { email: hashedEmail },
    });

    if (!existing) {
      await prisma.admin.create({
        data: {
         
           email: encryptedEmail,
           name: encryptedName,
           password: hashedPassword,
           hashEmail:hashedEmail
        },
      });
      console.log(' Default admin created.');
    } else {
      console.log(' Default admin already exists.');
    }
  } catch (err) {
    console.error('Error seeding admin:', err);
  } finally {
    await prisma.$disconnect();
  }
})();
