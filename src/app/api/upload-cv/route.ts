import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import { prisma } from "@/lib/prisma";
import { existsSync } from "fs";

export async function POST(req: Request) {
  try {
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

    // Ensure folder exists (race‑safe)
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true, mode: 0o700 });
    }

    const filePath = path.join(uploadsDir, uniqueFileName);
    const relativeUrl = `/cv-uploads/${uniqueFileName}`;

    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(filePath, buffer, { mode: 0o600 });

    const applicant = await prisma.applicant.create({
      data: {
        firstName: firstname,
        lastName: lastname,
        email,
        phone: phone ?? "",
        address: address ?? "",
        cvStorageUrl: relativeUrl,
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
