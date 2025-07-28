'use server'
import { encrypt } from "@/lib/crypto";
import { getPrisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function sendEmail(prevState: any, formData: FormData) {
    const first = formData.get("first-name") as string;
    const last = formData.get("last-name") as string;
    const company = formData.get("company") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone-number") as string;
    const num = formData.get("numEmp") as string;
    const message = formData.get("message") as string;

    if (!first || !last || !company || !email || !phone || !num || !message) {
        return { 
            success: false, 
            error: "Alle Felder sind erforderlich" 
        };
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Safety Doors Contact Form" <akar.ali@safety-doors.com>`,
            to: process.env.TO_EMAIL,
            subject: `Neue Kontaktanfrage von ${first} ${last}`,
            html: `
                <p><strong>Voll Name:</strong> ${first + " " + last}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Firma:</strong> ${company}</p>
                <p><strong>Telefon:</strong> ${phone}</p>
                <p><strong>Mitarbeiter Zahl:</strong> ${num}</p>
                <p><strong>Nachricht:</strong><br>${message}</p>
            `,
        });
            const prisma = getPrisma();
            await prisma.contactSubmission.create({
            data: {
                firstName: encrypt(first),
                lastName: encrypt(last),
                company: encrypt(company),
                email: encrypt(email),
                phone: encrypt(phone),
                message: encrypt(message),
                numEmp: parseInt(num)
            }
        });


        return { success: true };
    } catch (error) {
        console.error("Send email error:", error);
        return { 
            success: false, 
            error: "Fehler beim E-Mail-Versand"  
        };
    }
}