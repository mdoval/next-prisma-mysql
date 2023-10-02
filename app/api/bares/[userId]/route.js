import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'
import getUser from '@/lib/getUserId'

export async function GET(request, { params }) {
    //const { searchParams } = new URL(request.url)
    //const userId = searchParams.get('userId')

    //const usuario = await request.json()
//    const userId = await getUser("martindoval@gmail.com")
    
    console.log(params)
    const userId = parseInt(params.userId)
    
    let baresDelUsuario = []
    try {
         baresDelUsuario = await prisma.bar.findMany({
         where: {
            userId: userId, // Filtra por el userId deseado
          },
        });
      } catch (error) {
        console.error('Error al obtener los bares del usuario:', error);
      } finally {
        await prisma.$disconnect(); // Cierra la conexión a la base de datos cuando hayas terminado
      }

    return NextResponse.json( { baresDelUsuario } )
}