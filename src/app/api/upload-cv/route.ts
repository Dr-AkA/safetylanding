import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import { getPrisma } from "@/lib/prisma";
import { existsSync } from "fs";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { decrypt, encrypt } from "@/lib/crypto";
export async function POST(req: Request) {
  try {
     const prisma = getPrisma();
    const formData = await req.formData();

    const firstname = formData.get("firstname") as string | null;
    const lastname = formData.get("lastname") as string | null;
    const email = formData.get("email") as string | null;
    const phone = formData.get("phone") as string | null;
    const address = formData.get("address") as string | null;
    const jobId = formData.get("jobId");
    const trainingId = formData.get("trainingId");
    const file = formData.get("cv") as File | null;

    if (!firstname || !lastname || !email || !file) {
      return NextResponse.json({ error: "Missing required fields or file" }, { status: 400 });
    }

    const safeFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const uniqueFileName = `${randomUUID()}-${safeFileName}`;
    const uploadsDir = path.join(process.cwd(), "cv-uploads");

    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true, mode: 0o700 });
    }

    const filePath = path.join(uploadsDir, uniqueFileName);
    const relativeUrl = `/cv-uploads/${uniqueFileName}`;

    const uint8Array = new Uint8Array(await file.arrayBuffer());
    await writeFile(filePath, uint8Array, { mode: 0o600 });

    const applicant = await prisma.applicant.create({
      data: {
        firstName:encrypt(firstname),
        lastName:encrypt(lastname),
        email:encrypt(email),
        phone: phone ? encrypt(phone) : "",
        address: address ? encrypt(address) : "", 
        cvStorageUrl:encrypt(relativeUrl),
        jobId: jobId ? parseInt(jobId.toString()) : null,
        trainingId: trainingId ? parseInt(trainingId.toString()) : null,
      },
    });

    return NextResponse.json({ success: true, applicant });
  } catch (error) {
    console.error("Upload failed:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}



export async function GET() {
  try {
     const prisma = getPrisma();
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const applicants = await prisma.applicant.findMany({
      orderBy: {
        submittedAt: "desc",
      },
      include: {
        job: true,
        training: true,
      },
    });

    type Applicant = typeof applicants[0];

    const decryptedApplicants = applicants.map((applicant: Applicant) => ({
      ...applicant,
      firstName: decrypt(applicant.firstName),
      lastName: decrypt(applicant.lastName),
      email: decrypt(applicant.email),
      phone: decrypt(applicant.phone),
      address: decrypt(applicant.address),
      cv: applicant.cvStorageUrl ? decrypt(applicant.cvStorageUrl) : "", 
      isSeen: applicant.isSeen,
      job: applicant.job,
      training: applicant.training,
    }));

    return NextResponse.json(decryptedApplicants);
   
  } catch (error) {
    console.error("GET /api/upload-cv failed:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}