import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'

export async function POST(request) {
    const data = await request.json()
    let res = { mensaje: "Agregando Bar"}
    try {
        const bar = await prisma.bar.create({data: data})    
        res = bar
    } catch(error) {
        console.log(error)
        res = { mensaje: "Error al crear Bar"}
    }
        
    return NextResponse.json( { res } )
}