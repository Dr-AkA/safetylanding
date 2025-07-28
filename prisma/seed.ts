import 'dotenv/config';
import { getPrisma } from '../src/lib/prisma';
import { encrypt, hash } from '../src/lib/crypto';
import bcrypt from 'bcrypt';


(async () => {
  try {
    const defaultEmail = process.env.DEFAULT_ADMIN_EMAIL;
    const defaultName = process.env.DEFAULT_ADMIN_NAME;
    const defaultPassword = process.env.DEFAULT_ADMIN_PASSWORD;
    const prisma = getPrisma();

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
    await getPrisma().$disconnect();

  }
})();
