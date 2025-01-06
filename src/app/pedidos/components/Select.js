"use client"
import { useEffect, useState } from "react"
import Styles from "../page.module.css"
import {
    DownOutlined,
    UpOutlined
} from '@ant-design/icons';

export default function Select({ titulo, listaPedidos, setPedidoAberto, idSelecionado, pedidoAberto }) {
    const [pedidosVisiveis, setPedidosVisiveis] = useState(true);

    return (<div className={Styles.selectPedido}>
        <div className={Styles.selectPedidoHeader}>
            <p className={Styles.selectPedidoTitulo}> {titulo} </p>
            <div className={Styles.selectPedidoDireita}>
                <button className={Styles.selectPedidoBotao} onClick={() => setPedidosVisiveis(!pedidosVisiveis)}>
                    {pedidosVisiveis ? <DownOutlined /> : <UpOutlined />} </button>
                <span className={Styles.selectPedidoTitulo}> {listaPedidos.length}</span>
            </div>
        </div>
        {pedidosVisiveis && listaPedidos.map((pedido, i) => 
            <button className={Styles.pedido} onClick={() => setPedidoAberto(pedido)} style={{ borderLeft: idSelecionado == pedido.id ? "5px solid #992800" : "none" }} key={i}> 
                <span> 
                    <div className={Styles.identificadorDePedidoDiv}>
                        <p>{pedido.nome}</p>  
                        <span className={Styles.identificadorDePedido}> #{pedido.id}</span> 
                    </div>
                    <p> {pedido.aviso}</p>
                </span> 
            </button>)}
    </div>)


}