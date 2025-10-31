import { NextResponse } from "next/server";
import { db } from "@/app/lib/database";

export async function GET() {
  const favorites = await db.getAll();
  return NextResponse.json(favorites, { status: 200 });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name } = body;
    if (!name) return NextResponse.json({ error: "Falta el nombre" }, { status: 400 });

    const created = await db.add(name);

    if (!created)
      return NextResponse.json({ error: "Ya existe" }, { status: 409 });

    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error("POST /api/favorites error:", error);
    return NextResponse.json({ error: "Error al agregar favorito" }, { status: 500 });
  }
}

