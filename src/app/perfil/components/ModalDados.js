'use client';
import { useState } from 'react';
import { Modal } from "antd";
import Styles from "../page.module.css";

export default function ModalDados({ dadosIniciais, isOpen, onCancel, onSave }) {
  const [dados, setDados] = useState({...dadosIniciais});

  return (
    <Modal title={"Editar perfil"} open={isOpen} footer={null} onCancel={onCancel} style={{ color: "#992800" }}>
      <div className={Styles.modalDados_divInputModalDados}>
        <div className={Styles.modalDados_labelInputModalDados}>Nome da loja:</div>
        <input className={Styles.modalDados_inputModalDados} value={dados.nome} onChange={e => setDados({ ...dados, nome: e.target.value })} />
      </div>
      <div className={Styles.modalDados_divInputModalDados}>
        <div className={Styles.modalDados_labelInputModalDados}>Email:</div>
        <input className={Styles.modalDados_inputModalDados} value={dados.email} onChange={e => setDados({ ...dados, email: e.target.value })} />
      </div>
      <div className={Styles.modalDados_divInputModalDados} style={{ minWidth: "40%" }}>
        <div className={Styles.modalDados_labelInputModalDados}>Dono da loja:</div>
        <input className={Styles.modalDados_inputModalDados} value={dados.dono} onChange={e => setDados({ ...dados, dono: e.target.value })} />
      </div>
      <div className={Styles.modalDados_divInputModalDados}>
        <div className={Styles.modalDados_labelInputModalDados}>Telefone:</div>
        <input type='text' placeholder='() _____-____' className={Styles.modalDados_inputModalDados} value={dados.telefone} onChange={e => setDados({ ...dados, telefone: e.target.value })} />
      </div>
      <div className={Styles.modalDados_divInputModalDados}>
        <div className={Styles.modalDados_labelInputModalDados}>Descrição da loja:</div>
        <textarea rows={10} className={Styles.modalDados_inputModalDados} style={{ resize: "none" }} value={dados.descricao} onChange={e => setDados({ ...dados, descricao: e.target.value })} />
      </div>

      <div className={Styles.modalDados_divInputModalDados}>
        <button 
          className={Styles.botaoSalvar}
          onClick={() => {
            onSave(dados);
            onCancel();
          }}>Salvar</button>
      </div>
    </Modal>);
}