"use client";
import { useState } from "react";
import Image from "next/image";
import Styles from "../page.module.css";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

export default function Produto({ nome, preco, imagem, descricao }) {
 const [visivel, setVisivel] = useState(true);
    return (
            visivel ? <div className={Styles.produtoItem}>
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
                        <button
                        className={Styles.olhoBotao}
                            onClick={() => setVisivel(!visivel)}><EyeOutlined className={Styles.olho} /></button>
                                </div> : 
                                 <div className={Styles.produtoItem}>
                                                    <span>----</span>
        <button className={Styles.olhoBotao} onClick={() => setVisivel(!visivel)}> <EyeInvisibleOutlined className={Styles.olho} /> </button>
 </div>
 );
}

