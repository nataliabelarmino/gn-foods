"use client"
import { useState } from "react" 
import Styles from "../page.module.css"
import {
  DownOutlined,
  UpOutlined
} from '@ant-design/icons';

export default function Select({ titulo, listaPedidos, idSelecionado }) {
    const [pedidosVisiveis, setPedidosVisiveis] = useState (true)
    return (<div className={Styles.selectPedido}>
        <div className={Styles.selectPedidoHeader}>
            <p className={Styles.selectPedidoTitulo}> {titulo} </p>
            <div className={Styles.selectPedidoDireita}>
                <button className= {Styles.selectPedidoBotao} onClick={() => setPedidosVisiveis (!pedidosVisiveis)}> 
                   {pedidosVisiveis ?  <DownOutlined  /> : <UpOutlined />  } </button>
                <span className={Styles.selectPedidoTitulo}> {listaPedidos.length}</span>
                </div>
                    </div>
                        {pedidosVisiveis && listaPedidos.map(pedido => <div> <span> <p>{pedido.nome}</p> <p> {pedido.estado}</p></span> <span> #{pedido.id}</span> </div>)}
                         </div>)


}