'use client';
import { useState } from 'react';
import { Modal, Upload } from "antd";
import Menu from "../components/menu/Menu";
import Styles from "./page.module.css";
import { CameraOutlined, EditFilled } from '@ant-design/icons';
import ModalDados from './components/ModalDados';
import ModalHorarios from './components/ModalHorarios';
import LinhaAvaliacao from './components/LinhaAvaliacao';

export default function Perfil() {
  const [dados, setDados] = useState({
    nome: "GN Loja ",
    email: "gnloja@gmail.com",
    dono: "Fulano da Silva",
    logradouro: "R. Treze de Maio, 211 - PB",
    telefone: "83 99988-7766",
    descricao: "Nossa loja é o seu destino perfeito para saborear delícias irresistíveis em um ambiente acolhedor e descontraído. Oferecemos uma variedade de lanches frescos e saborosos, desde sanduíches gourmet até batatas fritas crocantes, tudo preparado com ingredientes de alta qualidade."
  });
  const [imagem, setImagem] = useState();
  const [modalDadosAberto, setModalDadosAberto] = useState(false);
  const [modalHorariosAberto, setModalHorariosAberto] = useState(false);
  const [horariosSemana, setHorariosSemana] = useState([
    {
      dia: "Seg",
      nomeDiaCompleto: "Segunda",
      horarioInicio: "",
      horarioFim: "",
      aberto: false
    },
    {
      dia: "Ter",
      nomeDiaCompleto: "Terça",
      horarioInicio: "13:00",
      horarioFim: "18:00",
      aberto: true
    },
    {
      dia: "Qua",
      nomeDiaCompleto: "Quarta",
      horarioInicio: "13:00",
      horarioFim: "18:00",
      aberto: true
    },
    {
      dia: "Qui",
      nomeDiaCompleto: "Quinta",
      horarioInicio: "13:00",
      horarioFim: "18:00",
      aberto: true
    },
    {
      dia: "Sex",
      nomeDiaCompleto: "Sexta",
      horarioInicio: "13:00",
      horarioFim: "18:00",
      aberto: true
    },
    {
      dia: "Sáb",
      nomeDiaCompleto: "Sábado",
      horarioInicio: "13:00",
      horarioFim: "18:00",
      aberto: true
    },
    {
      dia: "Dom",
      nomeDiaCompleto: "Domingo",
      horarioInicio: "13:00",
      horarioFim: "18:00",
      aberto: true
    }
  ]);
  const [avaliacoes, setAvaliacoes] = useState([
    {
      pedido: 1,
      data: "12/12/2024",
      nota: 5,
      noQueMelhorar: "Nada por enquanto",
      comentarios: [{
        remetente: "Usuário",
        data: "12/12/2024, 18:00:09",
        comentario: "Podia melhorar só um pouquinho..."
      },
      {
        remetente: "Você",
        data: "13/12/2024, 08:02:16",
        comentario: "como posso ajudar?"
      }]
    },
    {
      pedido: 2,
      data: "22/01/2025",
      nota: 3,
      noQueMelhorar: "Tempo de entrega",
      comentarios: [{
        remetente: "Usuário",
        data: "22/01/2025, 19:00:49",
        comentario: "Lorem Ipsum (1)..."
      }]
    },
    {
      pedido: 3,
      data: "30/01/2025",
      nota: 4,
      noQueMelhorar: "Atendimento",
      comentarios: [{
        remetente: "Usuário",
        data: "30/01/2025, 09:34:12",
        comentario: "Lorem Ipsum (2)..."
      },
      {
        remetente: "Você",
        data: "30/01/2025, 09:40:23",
        comentario: "Lorem Ipsum (2.1)?"
      },
      {
        remetente: "Usuário",
        data: "31/01/2025, 13:00:01",
        comentario: "Lorem Ipsum (2.2)..."
      }]
    },
    {
      pedido: 4,
      data: "01/02/2025",
      nota: 1,
      noQueMelhorar: "Qualidade do produto",
      comentarios: [{
        remetente: "Usuário",
        data: "01/02/2025, 21:32:15",
        comentario: "Lorem Ipsum (3)..."
      }]
    },
    {
      pedido: 5,
      data: "12/03/2025",
      nota: 5,
      noQueMelhorar: "Atendimento",
      comentarios: [{
        remetente: "Usuário",
        data: "12/03/2025, 22:29:29",
        comentario: "Lorem Ipsum (4)..."
      },
      {
        remetente: "Usuário",
        data: "07/04/2025, 07:45:57",
        comentario: "Lorem Ipsum (4.1)..."
      }]
    },
  ]);

  return (
    <div className={Styles.container}>
      <Menu paginaAtual={"perfil"} />
      <div className={Styles.conteudo}>
        <div className={Styles.capa}></div>
        <div className={Styles.subConteudo}>
          <Upload listType="picture-card" className={Styles.uploadImage} maxCount={1} onChange={e => setImagem(URL.createObjectURL(e.file.originFileObj))}>
            <div style={{ fontSize: 20, display: "block" }}>
              <CameraOutlined />
            </div>
            <div>Adicionar logomarca</div>
          </Upload>
          <div className={Styles.paiTitulo}>
            <span className={Styles.titulo}>{dados.nome}</span>
            <button className={Styles.botaoEditar} onClick={() => modalDadosAberto == false && setModalDadosAberto(true)}>
              <span>Editar</span>
              <EditFilled />
            </button>
            <ModalDados dadosIniciais={dados} onSave={novosDados => setDados(novosDados)} isOpen={modalDadosAberto} onCancel={() => setModalDadosAberto(false)} />
          </div>

          <div className={Styles.quadroDados}>
            <div className={Styles.linhaDado}>
              <span>
                <span className={Styles.label}>Nome da loja: </span><span>{dados.nome}</span>
              </span>
              <span>
                <span className={Styles.label}>Email: </span><span>{dados.email}</span>
              </span>
              <span>
                <span className={Styles.label}>Dono da loja:  </span><span>{dados.dono}</span>
              </span>
            </div>
            <div className={Styles.linhaDado}>
              <span>
                <span className={Styles.label}>Logradouro: </span><span>{dados.logradouro}</span>
              </span>
              <span>
                <span className={Styles.label}>Telefone de contato:  </span><span>{dados.telefone || "() _____-____"}</span>
              </span></div>
            <div className={Styles.linhaDado}>
              <span>
                <span className={Styles.label} style={{ display: "block" }}>Descrição da loja: </span><span>{dados.descricao}</span>
              </span>
            </div>
          </div>

          <div className={Styles.quadrosSecundarios}>
            <div className={Styles.quadroEBotao}>
              <div className={Styles.divHorariosPai}>
                <div className={Styles.label}>Horário de atendimento</div>
                <div className={Styles.divHorarios}>
                  {horariosSemana.map((horario, i) => (
                    <div key={i} className={Styles.horarioSemana}>
                      <div className={Styles.dia}>
                        <span>{horario.dia}</span></div>
                      <span>{
                        horario.aberto ? (horario.horarioInicio + " às " + horario.horarioFim) : "Fechado"
                      }</span>
                    </div>))}
                </div>
              </div>
              <button className={Styles.botaoEditar} onClick={() => modalHorariosAberto == false && setModalHorariosAberto(true)}>
                <span>Editar</span>
                <EditFilled />
              </button>
              <ModalHorarios dadosIniciais={horariosSemana} onSave={novosHorarios => setHorariosSemana(novosHorarios)} isOpen={modalHorariosAberto} onCancel={() => setModalHorariosAberto(false)} />
            </div>

            <div className={Styles.divAvaliacoesPai}>
              <div className={Styles.label}>Avaliações</div>
              <div className={Styles.quadroAvaliacoes}>
                <div className={Styles.titulosAvaliacao}>
                  <span className={Styles.itemLinhaTitulo}>Pedido</span>
                  <span className={Styles.itemLinhaTitulo}>Data do Pedido</span>
                  <span className={Styles.itemLinhaTitulo}>Nota</span>
                  <span className={Styles.itemLinhaTitulo}>Comentário</span>
                </div>

                {avaliacoes.map((avaliacao, i) => <LinhaAvaliacao key={i} avaliacao={avaliacao} editaAvaliacao={novaAvaliacao => {
                  let copiaAvaliacoes = [...avaliacoes];
                  copiaAvaliacoes[i] = novaAvaliacao;
                  setAvaliacoes(copiaAvaliacoes);
                }} />)}

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}