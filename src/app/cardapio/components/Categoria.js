"use client";
import { useState } from "react";
import Image from "next/image";
import Styles from "../page.module.css";
import ModalProduto from "./ModalProduto";
import Produto from "./Produto";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

export default function Categoria({ titulo, descricao, imagem }) {
  const [produtos, setProdutos] = useState([]);
  const [visivel, setVisivel] = useState(true);

  return (
    <div>
      <Image src={imagem} />
      <h3 className={Styles.text2}>
        <span>{titulo}</span>
        <div className={Styles.text2DivSecundaria}>
          <span>Preço</span>
          <button
            className={Styles.olhoBotao}
            onClick={() => setVisivel(!visivel)}
          >
            {(visivel && <EyeOutlined className={Styles.olho} />) || (
              <EyeInvisibleOutlined className={Styles.olho} />
            )}
          </button>
        </div>
      </h3>

      {visivel && produtos.map(({ nome, descricao, imagem, preco }) => (
        <Produto
          nome={nome}
          descricao={descricao}
          imagem={imagem}
          preco={preco}
        />
      ))}
      <ModalProduto
        onOKClick={(novoProduto) => setProdutos([...produtos, novoProduto])}
      />
    </div>
  );
}
