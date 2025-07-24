import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import { error } from 'console';
import { decrypt} from '@/lib/crypto';



export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const contacts = await prisma.contactSubmission.findMany({
            orderBy: { createdAt: 'desc' },
        });

        const decryptedContacts = contacts.map(contact => ({
            ...contact,
            firstName: decrypt(contact.firstName),
            lastName: decrypt(contact.lastName),
            company:decrypt(contact.company),
            email:decrypt(contact.email),
            phone:decrypt(contact.phone),
            message: decrypt(contact.message),
        }));

        return NextResponse.json(decryptedContacts);
    } catch (error) {
        console.error('Decryption failed:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}