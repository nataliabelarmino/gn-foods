"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Styles from "../page.module.css";
import ModalProduto from "./ModalProduto";
import Produto from "./Produto";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

export default function Categoria({ id, titulo }) {
  const [produtos, setProdutos] = useState([]);
  const [visivel, setVisivel] = useState(true);

  const fetchProdutos = async () => {
    const response = await fetch(`/api/produtos/${id}`);
    const data = await response.json();
    setProdutos(data);
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  const addProduto = async (novoProduto) => {
    const response = await fetch('/api/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoProduto)
    });

    fetchProdutos();
  };

  return (
    <div>
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

      {visivel && produtos.map(({ nome, descricao, imagem, preco }, indx) => (
        <Produto
          key={indx}
          nome={nome}
          descricao={descricao}
          imagem={imagem}
          preco={preco}
        />
      ))}
      <ModalProduto
        idCategoria={id}
        onOKClick={(novoProduto) => addProduto(novoProduto)}
      />
    </div>
  );
}
