import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'

export async function GET(request, { params }) {
    const barId = parseInt(params.barId)

    let productosDelBar = []
    try {
      productosDelBar = await prisma.bar.findMany({
         where: {
            barId: barId, // Filtra por el userId deseado
          },
        });
      } catch (error) {
        console.error('Error al obtener los bares del usuario:', error);
      } finally {
        await prisma.$disconnect(); // Cierra la conexión a la base de datos cuando hayas terminado
      }

    return NextResponse.json( { productosDelBar } )
}