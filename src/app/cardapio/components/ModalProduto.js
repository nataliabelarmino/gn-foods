"use client";
import { useState } from "react";
import Image from "next/image";
import Styles from "../page.module.css";
import { Button, Modal, Upload } from "antd";

export default function ModalProduto({ onOKClick }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState();
  const [imagem, setImagem] = useState();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    onOKClick({
      nome,
      descricao,
      preco,
      imagem,
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={showModal} className={Styles.botao}>
        + Adicionar produto
      </button>

      <Modal title="Novo Produto" open={isModalOpen} footer={null}>
        <div>
          <p className={Styles.label}>Nome</p>
          <input
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className={Styles.inputs}
          />
        </div>
        <div className={Styles.descricaoImagem}>
          <div>
            <p className={Styles.label}>Descriçao</p>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className={Styles.inputs}
            />
          </div>
          <div>
            <p className={Styles.label}>Adicione uma imagem</p>

              <Upload listType="picture-card" maxCount={1} onChange={e => console.log(e.file.url)}>
                <div className={Styles.uploadImage} style={{ display: imagem ? "none" : "flex"}}><span>+ Upload</span></div>
              </Upload>
          </div>
        </div>
        <div>
          <p className={Styles.label}>Preço</p>
          <input
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            type="number"
            className={Styles.inputs}
          />
        </div>
        <button className={Styles.botaoModal} onClick={handleCancel}>
          Cancelar
        </button>
        <button className={Styles.botaoModal} onClick={handleOk}>
          Salvar
        </button>
      </Modal>
    </div>
  );
}
