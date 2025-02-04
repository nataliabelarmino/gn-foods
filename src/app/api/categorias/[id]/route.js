import { NextResponse } from 'next/server';
import pool from "@/lib/db";

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const client = await pool.connect();
    await client.query('DELETE FROM categoria WHERE id = $1', [id]);
    client.release();
    return NextResponse.json({ message: 'Categoria removida com sucesso' });
  } catch (error) {
    console.log("[ERRO]: " + error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { titulo } = await request.json();
    const client = await pool.connect();
    await client.query('UPDATE categoria SET titulo = $1 WHERE id = $2', [titulo, id] );
    client.release();
    return NextResponse.json({ message: 'Categoria editada com sucesso' });
  } catch (error) {
    console.log("[ERRO]: " + error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}