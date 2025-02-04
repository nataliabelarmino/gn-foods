import { NextResponse } from 'next/server';
import pool from "@/lib/db";

export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM produto');
    client.release();
    return NextResponse.json(result.rows);
  } catch (error) {
    console.log("[ERRO]: " + error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { nome, descricao, preco, idCategoria } = await request.json();
    const client = await pool.connect();
    const result = await client.query('INSERT INTO produto (nome, descricao, preco, id_categoria) VALUES ($1, $2, $3, $4) RETURNING *', [nome, descricao, preco, idCategoria]);
    client.release();
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.log("[ERRO]: " + error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}