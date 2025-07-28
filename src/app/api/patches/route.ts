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

  const { title, description } = await req.json();
  if (!title || !description ) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const patch = await prisma.patch.create({
      data: { title, description },
    });
    return NextResponse.json(patch);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
     const prisma = getPrisma();
    const patches = await prisma.patch.findMany({
      orderBy: { releasedAt: 'desc' },
    });

    type Patch = typeof patches[0];
    
    const formatted = patches.map((patch: Patch) => ({
      ...patch,
      releasedAt: patch.releasedAt.toISOString().split('T')[0]
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
