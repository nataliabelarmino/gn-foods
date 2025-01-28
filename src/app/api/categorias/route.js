import { NextResponse } from 'next/server';
import pool from "@/lib/db";

export async function GET() {
 try {
 const client = await pool.connect();
 const result = await client.query('SELECT * FROM categoria');
 client.release();
 return NextResponse.json(result.rows);
 } catch (error) {
 console.log("Deu erro!");
 return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
 }
}

export async function POST(request) {
 try {
 const { titulo, descricao } = await request.json();
 const client = await pool.connect();
 const result = await client.query('INSERT INTO categorias (titulo, descricao) VALUES ($1, $2) RETURNING *', [titulo, descricao]);
 client.release();
 return NextResponse.json(result.rows[0], { status: 201 });
 } catch (error) {
 console.log("Deu erro!");
 return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
 }
}