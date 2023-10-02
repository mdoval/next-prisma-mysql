import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'

export async function GET(request, { params }) {
    const barId = parseInt(params.barId)
    let res = { mensaje: "Borrando Bar"}
    try {
        const deleteBar = await prisma.bar.deleteMany({
            where: {
              id: barId,
            }
          })        
        res = deleteBar
    } catch(error) {
        console.log(error)
        res = { mensaje: "Error al eliminar Bar"}
    } finally {
        await prisma.$disconnect(); // Cierra la conexión a la base de datos cuando hayas terminado
      }
        
    return NextResponse.json( { res } )
}