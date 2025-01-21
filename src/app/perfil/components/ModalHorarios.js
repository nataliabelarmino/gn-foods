'use client';
import { useState } from 'react';
import { Modal } from "antd";
import Styles from "../page.module.css";

export default function ModalHorarios({ dadosIniciais, isOpen, onCancel, onSave }) {
  const [horariosSemana, setHorariosSemana] = useState([...dadosIniciais]);
  const [diaSelecionado, setDiaSelecionado] = useState(0);
  const [horarioInicio, setHorarioInicio] = useState("");
  const [horarioFim, setHorarioFim] = useState("");
  const [aberto, setAberto] = useState(false);

  const salvaHorario = () => {
    horariosSemana[diaSelecionado] = {
      ...horariosSemana[diaSelecionado],
      horarioInicio,
      horarioFim,
      aberto
    };
  }

  return (
    <Modal title={"Editar horário de atendimento:"} open={isOpen} footer={null} onCancel={onCancel} style={{ color: "#992800" }}>
      <div className={Styles.modalHorarios_divDias}>
        {horariosSemana.map((horario, i) => (
          <button onClick={() => setDiaSelecionado(i)} className={diaSelecionado == i ? Styles.modalHorarios_diaSelecionado : Styles.dia}>
            <span>{horario.dia}</span>
          </button>
        ))}
      </div>

      <div className={Styles.modalHorarios_nomeDia}>{horariosSemana[diaSelecionado].nomeDiaCompleto}</div>

      {aberto && <div className={Styles.modalHorarios_divHora}>
        <span>Das </span>
        <input type={"time"} className={Styles.modalHorarios_inputHora} value={horarioInicio} onChange={e => setHorarioInicio(e.target.value)} />
        <span>às</span>
        <input type={"time"} className={Styles.modalHorarios_inputHora} value={horarioFim} onChange={e => setHorarioFim(e.target.value)} />
      </div>}

      <div className={Styles.modalHorarios_divAberto}>
        <label>
          <span>Aberto:</span>
          <input type={"checkbox"} className={Styles.modalHorarios_abertoCheckbox} value={aberto} onChange={e => setAberto(!aberto)} />
        </label>
      </div>

      <div className={Styles.modalHorarios_divInputModalDados}>
        <button
          className={Styles.botaoSalvar}
          onClick={() => {
            salvaHorario();
            onSave(horariosSemana);
            onCancel();
          }}>Salvar</button>
      </div>
    </Modal>);
}