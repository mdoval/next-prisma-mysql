import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'
import getUser from '@/lib/getUserId'

export async function GET(request) {
    //const usuario = await request.json()
    const userId = await getUser("martindoval@gmail.com")
    console.log(userId)
    const bares = [{bar: "hola"}, {bar: "hola hola"}]

/*    let user = await prisma.user.findFirst({
        where: {
          email: usuario.email,
        },
    })
    if(user === null) {
        user = await prisma.user.create({data: usuario})    
    }
    */

    return NextResponse.json( { bares } )
}