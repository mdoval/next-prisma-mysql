import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'

export async function POST(request, { params }) {
    const barId = parseInt(params.barId)
    const data = await request.json()
    let res = { mensaje: "Actualizando Bar"}
    try {
        const updateBar = await prisma.bar.update({
            where: {
              id: barId,
            },
            data: data,
          })        
        res = updateBar
    } catch(error) {
        console.log(error)
        res = { mensaje: "Error al actualizar Bar"}
    } finally {
        await prisma.$disconnect(); // Cierra la conexión a la base de datos cuando hayas terminado
      }
        
    return NextResponse.json( { res } )
}