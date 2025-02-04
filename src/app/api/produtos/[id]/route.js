import { NextResponse } from 'next/server';
import pool from "@/lib/db";

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const client = await pool.connect();
    await client.query('DELETE FROM produto WHERE id = $1', [id]);
    client.release();
    return NextResponse.json({ message: 'Produto removido com sucesso' });
  } catch (error) {
    console.log("[ERRO]: " + error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { nome, descricao, preco, idCategoria } = await request.json();
    const client = await pool.connect();
    await client.query('UPDATE produto SET nome = $1, descricao = $2, preco = $3, id_categoria = $4 WHERE id = $5', [nome, descricao, preco, idCategoria, id] );
    client.release();
    return NextResponse.json({ message: 'Produto editado com sucesso' });
  } catch (error) {
    console.log("[ERRO]: " + error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}