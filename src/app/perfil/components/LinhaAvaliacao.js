'use client';
import { useState } from 'react';
import { StarOutlined } from '@ant-design/icons';
import Styles from "../page.module.css";
import ModalAvaliacoes from './ModalAvaliacoes';

export default function LinhaAvaliacao({ avaliacao, editaAvaliacao }) {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <span>
      <div className={Styles.linhaAvaliacao}>
        <span className={Styles.itemLinha}>{avaliacao.pedido}</span>
        <span className={Styles.itemLinha} style={{ marginLeft: 40 }}>{avaliacao.data}</span>
        <span className={Styles.itemLinha} style={{ marginLeft: 40, color: "#FFAF00" }}><span style={{ color: "#992800" }}>{avaliacao.nota}</span><StarOutlined /></span>
        <span className={Styles.itemLinha} style={{ color: "#FFAF00" }}>
          <a onClick={() => setModalAberto(true)}>Abrir comentário</a>
        </span>
      </div>
      <ModalAvaliacoes 
        dadosIniciais={avaliacao} 
        isOpen={modalAberto} 
        onCancel={() => setModalAberto(false)}
        onSave={avaliacaoEditada => editaAvaliacao(avaliacaoEditada)} />
    </span>
  );
}