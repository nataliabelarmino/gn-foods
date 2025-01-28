"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Menu from "../components/menu/Menu";
import Styles from "./page.module.css";
import Secao from "./components/Secao";
import Categoria from "./components/Categoria";

export default function Cardapio() {
 const [categorias, setCategorias] = useState([]);

 useEffect(() => {
 const fetchAlunos = async () => {
 const response = await fetch('/api/categorias');
 const data = await response.json();
 setCategorias(data);
 };
 
 fetchAlunos();
 }, [categorias]);

 const addCategoria = async (novaCategoria) => {
 const response = await fetch('/api/categorias', {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 },
 body: JSON.stringify(novaCategoria)
 });

 setCategorias([...categorias]);
 }

 return (
 <div className={Styles.container}>
 <Menu />
 <div className={Styles.conteudo}>
 <h1 className={Styles.titulo}>Cardápio</h1>
 <h5 className={Styles.text}>Seu cardápio é sua vitrine na GNFOOD’S </h5>

 <Secao
 text="Categoria"
 buttonTitle=" + Adicionar categoria"
 title="Nova categoria"
 placeholder="Nome da categoria"
 buttonOKTitle="Salvar"
 onOkClick={(novaCategoria) => addCategoria(novaCategoria)}
 />

 {categorias.map(({ titulo, descricao, imagem }, i) => <Categoria titulo={titulo} descricao={descricao} imagem={imagem} key={i} />)}

 <input className={Styles.btnAtualizar} type="button" value="Atualizar" /> 
 </div>

 </div>

 
 );
}

