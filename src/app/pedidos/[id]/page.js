"use client";
import { useState } from "react";
import Image from "next/image";
import Menu from "../../components/menu/Menu";
import Styles from "../page.module.css";
import Select from "../components/Select"


export default function Cardapio({params}) {
    const id_pedido = params.id;
    console.log(id_pedido);
    const [pendentes, setPendentes] = useState([{ id: 1, nome: "Gabriel", estado: "Comfirme o pedido" }
    ]);
    const [aguardandoPreparo, setAguardandoPrepars] = useState([{ id: 34, nome: "Gabriel2", estado: "Em preparo" }
    ]);
    const [prontos, setProntos] = useState([{ id: 22, nome: "Gabriel3", estado: "Pronto para entrega" }
    ]);
    const [finalizados, setFinalizados] = useState([{ id: 12, nome: "Gabriel4", estado: "Pedido finalizado" }
    ]);

    return (
        <div className={Styles.container}>
            <Menu />
            <div className={Styles.menuPedido}>

                <div className={Styles.headerMenuPedidos}>
                    <div className={Styles.menuPedidosTitulo}> <p>Pedidos</p> </div>
                    <div className={Styles.busca} >
                        <div className={Styles.divBusca} >

                        </div>
                        <select className={Styles.selectFiltro}>
                            <option selected> Filtros </option>

                        </select>
                    </div>
                </div>
                <Select titulo="Pendente" listaPedidos={pendentes} />
                <Select titulo="Aguardando preparo" listaPedidos={aguardandoPreparo} />
                <Select titulo="Pronto para entrega" listaPedidos={prontos} />
                <Select titulo="Finalizado" listaPedidos={finalizados} />

            </div>
            <div className={Styles.conteudo}>
                <div className={Styles.headerConteudo}>

                </div>
            </div>

            <div style={{flexDirection: "column"}}>
                <div className={Styles.informacoes}>
                <div className={Styles.headerItem}><p> Informaçoes de entrega</p></div>
                <div className={Styles.conteudoItem}>
                    <p><span className={Styles.item}>Endereço: </span> <span>Centro - Rua São José do Ramo - 21  - Areial - PB</span></p>
                    <p><span className={Styles.item}>Previsao de entrega: </span> <span>-</span></p>
                    <p><span className={Styles.item}>Forma de pagamento: </span> <span>Cartao de crédito</span></p>
                </div>
            </div>

               
            <div className={Styles.informacoes}>
                <div className={Styles.headerItem}><p> Informaçoes de entrega</p></div>
                <div className={Styles.conteudoItem}>
                    <p><span className={Styles.item}>Nome: </span> <span>Centro - Rua São José do Ramo - 21  - Areial - PB</span></p>
                    <p><span className={Styles.item}>Telefone: </span> <span>-</span></p>
                    <p><span className={Styles.item}>Email: </span> <span>Cartao de crédito</span></p>
                    <p><span className={Styles.item}>Cpf: </span> <span>Cartao de crédito</span></p>
                </div>
            </div>

            <div className={Styles.informacoes}>
                <div className={Styles.headerItem}><p> Informaçoes de entrega</p></div>
                <div className={Styles.conteudoItem}>
                    <p><span className={Styles.item}>Endereço: </span> <span>Centro - Rua São José do Ramo - 21  - Areial - PB</span></p>
                    <p><span className={Styles.item}>Previsao de entrega: </span> <span>-</span></p>
                    <p><span className={Styles.item}>Forma de pagamento: </span> <span>Cartao de crédito</span></p>
            
                    
                </div>
            </div>
            </div>
            


        </div>


    );
}