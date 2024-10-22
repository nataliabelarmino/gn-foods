'use client';
import { useState } from 'react';
import Image from 'next/image';
import Menu from '../components/menu/Menu';
import Styles from './page.module.css';
import Secao from './components/Secao';
import { Modal } from "antd";

export default function Cardapio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState();
  const [imagem, setImagem] = useState();
  const [categorias, setCategorias] = useState(
                          [{ titulo: 'X-Bacon', descricao: 'descriçao...', imagem: '' },
                            { titulo: "Hambúrgueres artesanais", descricao: 'descriçao...', imagem: '' },
                            { titulo: 'Batata', descricao: 'descriçao...', imagem: '' }
                          ]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={Styles.container}>
      <Menu />
      <div className={Styles.conteudo}>
        <h1 className={Styles.titulo}>Cardápio</h1>
        <h5 className={Styles.text}>Seu cardápio é sua vitrine na GNFOOD’S </h5>

        <Secao text="Categoria" buttonTitle=" + Adicionar categoria" title="Nova categoria" placeholder='Nome da categoria' buttonOKTitle={"Salvar"} />

        {categorias.map(categoria => (
          <div key={categoria.titulo} >
            <img src={categoria.imagem} />
            <h3 className={Styles.text2}>{categoria.titulo}</h3>
            <button onClick={showModal} className={Styles.botao}> + Adicionar produto</button>
          </div>))}

     
          <Modal title="Novo Produto" open={isModalOpen} footer={null}>
            <div>
              <p className={Styles.label}>Nome</p>
              <input name="nome" value={nome} onChange={setNome} className={Styles.inputs} />
            </div>
            <div className={Styles.descricaoImagem}>
              <div>
                <p className={Styles.label}>Descriçao</p>
                <textarea value={descricao} onChange={setDescricao} className={Styles.inputs} />
              </div>
              <div>
                <p className={Styles.label}>Adicione uma imagem</p>
                <input type='image' value={imagem} onChange={setImagem} className={Styles.inputs} /> {/* OPÇAO DE USAR COMPONENTE UPLOAD DO ANT DESIGN */}
              </div></div>
            <div>
              <p className={Styles.label}>Preço</p>
              <input name="nome" value={preco} onClick={setPreco} type='number' className={Styles.inputs} />
            </div>
            <button className={Styles.botaoModal} onClick={handleCancel}>Cancelar</button>
            <button className={Styles.botaoModal} onClick={handleOk}>Salvar</button>
          </Modal>
        </div>
      
    </div>
  );
}