import { NextResponse } from 'next/server';
import pool from "@/lib/db";

export async function GET(request, { params }) {
  try {
    const { id_categoria } = params;
    const client = await pool.connect();
    console.log(id_categoria)
    const result = await client.query('SELECT * FROM produto WHERE id_categoria = $1', [id_categoria]);
    client.release();
    return NextResponse.json(result.rows);
  } catch (error) {
    console.log("[ERRO]: " + error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}