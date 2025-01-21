'use client';
import { useState } from 'react';
import { Modal, Rate, Steps } from "antd";
import { UserOutlined, CheckCircleOutlined, CheckCircleFilled } from '@ant-design/icons';
import Styles from "../page.module.css";

export default function ModalAvaliacoes({ dadosIniciais, isOpen, onCancel, onSave }) {
  const [dados, setDados] = useState(dadosIniciais);
  const [resposta, setResposta] = useState("");

  const enviar = () => {
    dados.comentarios.push({
      remetente: "Você",
      data: new Date().toLocaleString(),
      comentario: resposta
    });
    setResposta("");
    onSave(dados);
  }

  return (
    <Modal title={"Detalhes da Avaliação"} open={isOpen} footer={null} onCancel={onCancel} style={{ color: "#992800" }}>
      <div className={Styles.modalAvaliacoes_divSuperior}>
        <div className={Styles.modalAvaliacoes_subDivSuperior}>
          <span className={Styles.modalAvaliacoes_spanPedido}>{dados.pedido}</span>
          <span className={Styles.modalAvaliacoes_spanData}>Realizado em: <span className={Styles.modalAvaliacoes_data}>{dados.data}</span></span>
        </div>
      </div>

      <div className={Styles.modalAvaliacoes_secao}>
        <div className={Styles.modalAvaliacoes_titulos}>O que você achou do pedido? </div>
        <Rate value={dados.nota} />
      </div>

      {}

      <div className={Styles.modalAvaliacoes_secao}>
        <div className={Styles.modalAvaliacoes_titulos}>O que pode melhorar? </div>
        <div className={Styles.modalAvaliacoes_tag}>{dados.noQueMelhorar}</div>
      </div>

      <div className={Styles.modalAvaliacoes_secao}>
        <Steps 
          direction="vertical" 
          size="small" 
          status="finish"
          colorPrimary={"#fff"}
          current={dados.comentarios.length - 1} 
          items={
            [ ...dados.comentarios.map(comentario => {
              return { 
                title: comentario.remetente, 
                subTitle: comentario.data,
                description: comentario.comentario, 
                icon: comentario.remetente == "Você" ? <CheckCircleFilled /> : <UserOutlined />
              };
            }), 
            { 
              title: "Sua resposta", 
              icon: <CheckCircleOutlined /> }
            ]
          } />

        <textarea rows={10} className={Styles.modalAvaliacoes_input} value={resposta} onChange={e => resposta.length < 300 && setResposta(e.target.value)} />
        <div className={Styles.modalAvaliacoes_divCaracteres}>
          <span>{resposta.length}/300 caracteres</span>
        </div>
        <div className={Styles.modalAvaliacoes_divBotao}>
          <button className={Styles.botaoEnviar} onClick={enviar}>Enviar resposta</button>
        </div>
      </div>
    </Modal>);
}