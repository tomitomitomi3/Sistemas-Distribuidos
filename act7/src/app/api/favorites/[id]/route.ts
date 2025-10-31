import { NextResponse } from "next/server";
import { db } from "@/app/lib/database";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log("DELETE called with id:", params.id);

  const id = parseInt(params.id);
  if (isNaN(id)) return NextResponse.json({ error: "ID inválido" }, { status: 400 });

  const removed = await db.remove(id);

  if (!removed)
    return NextResponse.json({ error: "Pokémon no encontrado en favoritos" }, { status: 404 });

  return NextResponse.json({ message: "Eliminado con éxito" }, { status: 200 });
}
