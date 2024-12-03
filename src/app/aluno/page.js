import db from "@/lib/db";

export default async () => {

        const categorias = await db.query("select * from categoria");

    return (<>
        <h1>Lista de categorias</h1>
        <div>{categorias.rows.map( c => (<div>{c.nome}</div>))} </div>
    </>);
}


