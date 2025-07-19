import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import { error } from 'console';

export async function GET(req:NextRequest,{params}:{params:{id:string}})
{
    const id=parseInt(params.id);
    if(isNaN(id))
    {
        return NextResponse.json({error:'Invalid ID'},{status:400});
    }

    try {
        const training=await prisma.training.findUnique({where:{id}})
        if(!training)
        {
            return NextResponse.json({error:'Training not found'},{status:404});
        }
        return NextResponse.json(training);
    }catch (error)
    {
        console.error(error);
        return NextResponse.json({error:'Internal server errror'},{status:500});
    }
}

export async function PUT(req:NextRequest,{params}:{params:{id:string}})
{
    const session=await getServerSession(authOptions);
    if(!session)
    {
        return NextResponse.json({error:'Unauthorized'},{status:401});

    }
    const id=parseInt(params.id);
    if(isNaN(id))
    {
        return NextResponse.json({error:'Invalid ID'},{status:400});
    }
    
    const {title,description,startDate,endDate}=await req.json();
    if(!title||!description||!startDate||!endDate)
    {
        return NextResponse.json({error:'missing required field'},{status:400});
    }

    try 
    {
        const training=await prisma.training.update({
            where:{id},
            data:{title,description,startDate,endDate}
        });
        return NextResponse.json(training);
       
    }catch (error)
    {
        console.error(error);
        return NextResponse.json({error:'internal server'},{status:500});
    }

}


export async function DELETE(req:NextRequest,{params}:{params:{id:string}})
{
    const session=await getServerSession(authOptions);
    if(!session)
    {
        return NextResponse.json({error:'Unauthorized'},{status:401});
    }

    const id=parseInt(params.id);
    if(isNaN(id))
    {
        return NextResponse.json({error:'invalid ID'},{status:400})
    }

    try 
    {
        await prisma.training.delete({where:{id}})
        return NextResponse.json({message:'Training deleted'})
    }catch (error)
    {
        console.error(error);
        return NextResponse.json({error:'internal server error'},{status:500});
    }
}