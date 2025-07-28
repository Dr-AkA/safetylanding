import { NextRequest, NextResponse } from 'next/server';
import { getPrisma } from '@/lib/prisma';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { error } from 'console';
import {decrypt,encrypt} from '@/lib/crypto';




export async function GET(req:NextRequest,{params}:{params:{id:string}})
{    const prisma = getPrisma();
    const session=await getServerSession(authOptions);
    if(!session)
    {
        return NextResponse.json({error:"Unauthorized"},{status:401});
    }

    const id=parseInt(params.id);
    if(isNaN(id))
    {
        return NextResponse.json({error:"invalid ID"},{status:400});
    }
    try 
    {
        const applicant=await prisma.applicant.findUnique(
            {where:{id},
            include:{job:true,training:true}
        
        })
        if(!applicant)
        {
            return NextResponse.json({error:"applicant not found"},{status:404});
        }

        const decryptedApplicant={
            id:applicant.id,
             firstName: decrypt(applicant.firstName),
                lastName: decrypt(applicant.lastName),
                email:decrypt(applicant.email),
                phone:decrypt(applicant.phone),
                address:decrypt(applicant.address),
                cv:applicant.cvStorageUrl,
                isSeen:applicant.isSeen,
                job: applicant.job,
                training: applicant.training,
        }
        return NextResponse.json(decryptedApplicant);
    }catch (error)
    {
        return NextResponse.json({error:'internal server error'},{status:500});
    }
}



export async function PUT(req:NextRequest,{params}:{params:{id:string}})
{    const prisma = getPrisma();
    const session=await getServerSession(authOptions);
    if(!session)
    {
        return NextResponse.json({error:"UnAuthorized"},{status:401});
    }


    const id=parseInt(params.id);
    if(isNaN(id))
    {
        return NextResponse.json({error:"invalid ID"},{status:400});
    }

    const {isSeen}=await req.json();
    if(typeof isSeen !=="boolean")
    {
        return NextResponse.json({error:"SomeThing went wrong"},{status:400});
    }


    try 
    {
        const applicant=await prisma.applicant.update(
            {
                where:{id},
                data:{
                    isSeen
                }
            }
        );
        return NextResponse.json(applicant);
    }catch (error)
    {
        return NextResponse.json({error:"internal server errror"},{status:500})
    }

    
}


export async function DELETE(req:NextRequest,{params}:{params:{id:string}})
{    const prisma = getPrisma();
    const session=await getServerSession(authOptions);
    if(!session)
    {
        return NextResponse.json({error:"UnAuthorized"},{status:401});

    }

    const id=parseInt(params.id);
    if(isNaN(id))
    {
        return NextResponse.json({error:"Invalid ID"},{status:400});
    }
    


    try
    {
        await prisma.applicant.delete({where:{id}});
        return NextResponse.json({message:"applicant Deleted"});
    }catch (error)
    {
        return NextResponse.json({error:"internal server errro"},{status:500});
    }
}