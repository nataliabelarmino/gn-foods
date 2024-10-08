'use client';
import { useState } from 'react';
import Image from 'next/image';
import Menu from '../components/menu/Menu';
import Styles from './page.module.css';
import Secao from './components/Secao';

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
                <Secao text="Categoria" buttonTitle=" + Adicionar categoria" title="Nova categoria" placeholder='Nome da categoria' buttonOKTitle={"Salvar"} /> 
                <Secao text="Hambúrgueres artesanais" buttonTitle=" + Adicionar produto" title="Novo produto" placeholder='Nome' buttonOKTitle={"Salvar"} />
            </div>
        </div>
    );
}