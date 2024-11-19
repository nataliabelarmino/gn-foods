"use client";
import { useState } from "react";
import Image from "next/image";
import Styles from "../page.module.css";

export default function Produto({ nome, preco, imagem, descricao }) {
  return (
    <div className={Styles.produtoItem}>
      <div className={Styles.descricaoProduto}>
        <Image src={imagem} height={100} width={100} />
        <div>
          <p>{nome}</p>
          <p>{descricao}</p>
        </div>
      </div>
      <span className={Styles.produtoItemSpan}>
        <div>R$ {parseInt(preco).toFixed(2).toString().replace(".", ",")}</div>
        <div />
      </span>
    </div>
  );
}
