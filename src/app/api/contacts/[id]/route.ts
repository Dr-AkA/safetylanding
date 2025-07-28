import { NextRequest, NextResponse } from 'next/server';
import { getPrisma } from '@/lib/prisma';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { error } from 'console';
import {decrypt,encrypt} from '@/lib/crypto';

export async function GET(req:NextRequest,{params}:{params:{id:string}})
{ 
    const prisma = getPrisma();
    const session=await getServerSession(authOptions);
    if(!session)
    {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const id=parseInt(params.id);
    if(isNaN(id))
    {
        return NextResponse.json({error:'invalid ID'},{status:400});
    }

    try 
    {
        const contact=await prisma.contactSubmission.findUnique({where:{id}})
        if(!contact)
        {
            return NextResponse.json({ error: 'Contact not found' }, { status: 404 })
        }

        const decryptedFields={
            id:contact.id,
            firstName:decrypt(contact.firstName),
            lastName:decrypt(contact.lastName),
            company:decrypt(contact.company),
            email:decrypt(contact.email),
            phone:decrypt(contact.phone),
            numEmp:decrypt(contact.numEmp.toString()),
            isSeen:contact.isSeen
        }
         return NextResponse.json(decryptedFields)
    }catch (error)
    {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}


export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
   const prisma = getPrisma();
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const id = parseInt(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  const { isSeen } = await req.json();

  if (typeof isSeen !== "boolean") {
    return NextResponse.json({ error: 'Missing or invalid isSeen field' }, { status: 400 });
  }

  try {
    const contact = await prisma.contactSubmission.update({
      where: { id },
      data: {
        isSeen
      }
    });
    return NextResponse.json(contact);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}



export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
   const prisma = getPrisma();
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const id = parseInt(params.id);
    if (isNaN(id)) {
        return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    try {
        await prisma.contactSubmission.delete({ where: { id } });
        return NextResponse.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        console.error('Error deleting contact:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

