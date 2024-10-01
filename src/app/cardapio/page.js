'use client';
import { useState } from 'react';
import Image from 'next/image';
import Menu from '../components/menu/Menu';
import Styles from './page.module.css';
import { Modal } from "antd";

export default function Cardapio() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
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
                <h3 className={Styles.text2}>Categoria</h3>
                <button onClick={showModal} className={Styles.botao}> + Adicionar categoria</button>
                <Modal title="Nova categoria" open={isModalOpen} footer={null} onCancel={handleCancel}>
                    <input name="myInput" placeholder='Nome da categoria'/>
                    <button className={Styles.botao} onClick={handleOk}>Salvar</button>
                   
                </Modal>
        
            </div>
        </div>
    );
}