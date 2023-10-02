import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'

export async function POST(request) {
    const data = await request.json()
    let res = { mensaje: "Agregando Producto"}
    try {
        const producto = await prisma.producto.create({data: data})    
        res = producto
    } catch(error) {
        console.log(error)
        res = { mensaje: "Error al crear Producto"}
    }
        
    return NextResponse.json( { res } )
}