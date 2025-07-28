import { NextRequest, NextResponse } from 'next/server';
import { getPrisma } from '@/lib/prisma';
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import { error } from 'console';


export async function POST(req: NextRequest) {
  const prisma = getPrisma();
  const session=await getServerSession(authOptions);
  if(!session)
  {
    return NextResponse.json({error:'Unauthorized'},{status:401});
  }

  const { title, description, tags } = await req.json();
  if (!title || !description ) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const job = await prisma.job.create({
      data: { title, description, tags },
    });
    return NextResponse.json(job);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
     const prisma = getPrisma();
    const jobs = await prisma.job.findMany({
      orderBy: { postedAt: 'desc' },
    });
    return NextResponse.json(jobs);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
