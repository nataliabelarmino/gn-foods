"use client";
import { useState } from "react";
import Image from "next/image";
import Styles from "../page.module.css";

export default function Produto({ nome, preco, imagem, descricao }) {
  return (
    <div className={Styles.produtoItem}>
      <div>
        <Image src={imagem} />
        <p>{nome}</p>
        <p>{descricao}</p>
      </div>
      <span className={Styles.produtoItemSpan}>
        <div>R$ {preco}</div>
        <div />
      </span>
    </div>
  );
}
