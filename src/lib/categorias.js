import db from "./db";

export async function getCategorias() {
    const categorias = await db.query("select * from categoria");

    return categorias.rows;
}


