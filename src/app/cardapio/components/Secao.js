'use client';
import { useState } from 'react';
import Styles from '../page.module.css';
import { Modal } from "antd";

export default function Secao({ text, title, placeholder, buttonTitle, buttonOKTitle }) {
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
        <div>
            <h3 className={Styles.textcategoria}>{text}</h3>
            <button onClick={showModal} className={Styles.botao}>{buttonTitle}</button>
            <Modal title={title} open={isModalOpen} footer={null} onCancel={handleCancel}>
                <input name="myInput" placeholder={placeholder} />
                <button className={Styles.botaoModal} onClick={handleOk}>{buttonOKTitle}</button>
            </Modal>
        </div>
    );
}