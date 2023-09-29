import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'

export async function POST(request) {
    const usuario = await request.json()
    
    let user = await prisma.user.findFirst({
        where: {
          email: usuario.email,
        },
    })

    if(user === null) {
        user = await prisma.user.create({data: usuario})    
    }
    return NextResponse.json( { user } )
}