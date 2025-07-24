import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { error } from 'console';


export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { title, description, startDate, endDate, tags } = await req.json();

  if (!title || !description || !startDate || !endDate) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const training = await prisma.training.create({
      data: {
        title,
        description,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        tags,
      },
    });
    return NextResponse.json(training);
  } catch (error) {
    console.error('Failed to create training:', error);  // helpful debug log
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}



export async function GET() {
 try 
 {
  const training=await prisma.training.findMany(
    {
      orderBy:{id:'desc'},
    }
  );
  return NextResponse.json(training);
 }catch (error)
 {
  return NextResponse.json({error:'internal server error'},{status:500})
 }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const session=await getServerSession(authOptions);
  if(!session)
  {
    return NextResponse.json({error:'Unauthorized'},{status:401});
  }

  const id = parseInt(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  const { title, description, startDate, endDate, tags } = await req.json();
  if (!title || !description || !startDate || !endDate || !tags) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const training = await prisma.training.update({
    where: { id },
    data: { title, description, startDate: new Date(startDate), endDate: new Date(endDate), tags },
  });

  return NextResponse.json(training);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const session=await getServerSession(authOptions);
  if(!session)
  {
    return NextResponse.json({error:'unauthorized'},{status:401});
  }

  const id = parseInt(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  await prisma.training.delete({ where: { id } });
  return NextResponse.json({ message: 'Training deleted' });
}
