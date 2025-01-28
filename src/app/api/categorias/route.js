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
 const titulo = await request.json();
 const client = await pool.connect();
 const result = await client.query('INSERT INTO categoria (titulo) VALUES ($1) RETURNING *', [titulo]);
 client.release();
 return NextResponse.json(result.rows[0], { status: 201 });
 } catch (error) {
 console.log(error);
 return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
 }
}