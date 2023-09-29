import { NextResponse } from "next/server"

export async function GET(request) {
    const res = {message: "Listado de Usuarios no valido"}
    return NextResponse.json(res)
}