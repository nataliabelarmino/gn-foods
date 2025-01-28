"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Menu from "../components/menu/Menu";
import Styles from "./page.module.css";
import Select from "./components/Select"

export default function Cardapio() {
 const [pedidos, setPedidos] = useState([{ id: 1, nome: "Gabriel", aviso: "Comfirme o pedido", estado: "PENDENTE", email: "gabriel@gmail.com", cpf: "123.456.789-01", endereco: "Centro - Rua São José do Ramo - 21 - Areial - PB", previsaoEntrega: "09/02/2025", formaPagamento: "Catrão de crédito", hora: "09:50", itens: [{ quantidade: 2, item: "X-Burguer", preco: 5 }, { quantidade: 1, item: "Coca-Cola", preco: 10 }], total: 25 },
 { id: 34, nome: "Gabriel2", aviso: "Em preparo", estado: "EM_ANDAMENTO", telefone: "8399999-8888", email: "gabriel2@gmail.com", cpf: "116.502.130-77", endereco: "Centro - Rua 123 - 35 - Areial - PB", previsaoEntrega: "19/05/2025", formaPagamento: "Pix", hora: "08:25", itens: [{ quantidade: 2, item: "X-Burguer", preco: 5 }, { quantidade: 2, item: "X-Egg", preco: 6 }, { quantidade: 1, item: "Guaraná", preco: 9 }], total: 20 },
 { id: 3, nome: "Rodrigo", aviso: "Em preparo", estado: "EM_ANDAMENTO", telefone: "8399999-7777", email: "rodrigo@gmail.com", cpf: "705.351.110-37", endereco: "Centro - Rua São João do Ramo - 11A - Esperança - PB", previsaoEntrega: "30/12/2025", formaPagamento: "Catrão de débito", hora: "10:40", itens: [{ quantidade: 5, item: "Água", preco: 12 }], total: 12 },
 { id: 22, nome: "Marcela", aviso: "Pronto para entrega", estado: "PRONTO", telefone: "8399999-1111", email: "marcela@gmail.com", cpf: "576.713.930-02", endereco: "Centro - Rua São 456 - 21 - Natal - PB", previsaoEntrega: "09/8/2025", formaPagamento: "Catrão de crédito", hora: "12:18", itens: [{ quantidade: 1, item: "Pizza", preco: 38 }, { quantidade: 1, item: "Coca-Cola", preco: 10 }], total: 77 }
 ]);
 const [pedidoAberto, setPedidoAberto] = useState(pedidos[0]);

 const aceitarPedido = () => {
 pedidoAberto.estado = "EM_ANDAMENTO";
 pedidoAberto.aviso = "Em preparo";
 setPedidos([...pedidos]);
 }

 const aprontarPedido = () => {
 pedidoAberto.estado = "PRONTO";
 pedidoAberto.aviso = "Pronto para entrega";
 setPedidos([...pedidos]);
 }

 const recusarPedido = () => {
 const copiaPedidos = [...pedidos];
 const index = copiaPedidos.indexOf(pedidoAberto);
 copiaPedidos.splice(index, 1);
 setPedidos(copiaPedidos);

 if (index + 1 < pedidos.length) {
 setPedidoAberto(pedidos[index + 1]);
 }
 }

 const entregarPedido = () => {
 const copiaPedidos = [...pedidos];
 const index = copiaPedidos.indexOf(pedidoAberto);
 copiaPedidos.splice(index, 1);
 setPedidos(copiaPedidos);

 if (index + 1 < pedidos.length) {
 setPedidoAberto(pedidos[index + 1]);
 } else if (index - 1 > 0) {
 setPedidoAberto(pedidos[index - 1]);
 }
 }

 return (
 <div className={Styles.container}>
 <Menu />
 <div className={Styles.menuPedido}>

 <div className={Styles.headerMenuPedidos}>
 <div className={Styles.menuPedidosTitulo}> <p>Pedidos</p> <span className={Styles.quantPedidos}>{pedidos.length}</span> </div>
 <div className={Styles.busca} >
 <div className={Styles.divBusca} >

 </div>
 <select className={Styles.selectFiltro}>
 <option selected> Filtros </option>

 </select>
 </div>
 </div>
 <Select titulo="Pendente" listaPedidos={pedidos.filter(pedido => pedido.estado == "PENDENTE")} setPedidoAberto={setPedidoAberto} idSelecionado={pedidoAberto.id} pedidoAberto={pedidoAberto} />
 <Select titulo="Aguardando preparo" listaPedidos={pedidos.filter(pedido => pedido.estado == "EM_ANDAMENTO")} setPedidoAberto={setPedidoAberto} idSelecionado={pedidoAberto.id} pedidoAberto={pedidoAberto} />
 <Select titulo="Pronto para entrega" listaPedidos={pedidos.filter(pedido => pedido.estado == "PRONTO")} setPedidoAberto={setPedidoAberto} idSelecionado={pedidoAberto.id} pedidoAberto={pedidoAberto} />

 </div>
 <div className={Styles.conteudo}>
 <div className={Styles.conteudoHeader}>
 <span className={Styles.nomePedido}>{pedidoAberto.nome}</span>
 <span>Pedido #{pedidoAberto.id}</span>
 <span>Feito às {pedidoAberto.hora}</span>
 </div>

 <div className={Styles.dadosPedido}>
 <div className={Styles.informacoes}>
 <div className={Styles.headerItem}><p> Informaçoes de entrega</p></div>
 <div className={Styles.conteudoItem}>
 <p><span className={Styles.item}>Endereço: </span> <span>{pedidoAberto.endereco}</span></p>
 <p><span className={Styles.item}>Previsao de entrega: </span> <span>{pedidoAberto.previsaoEntrega ? pedidoAberto.previsaoEntrega : "-"}</span></p>
 <p><span className={Styles.item}>Forma de pagamento: </span> <span>{pedidoAberto.formaPagamento}</span></p>
 </div>
 </div>


 <div className={Styles.informacoes}>
 <div className={Styles.headerItem}><p> Informaçoes de cliente</p></div>
 <div className={Styles.conteudoItem}>
 <p><span className={Styles.item}>Nome: </span> <span>{pedidoAberto.nome}</span></p>
 <p><span className={Styles.item}>Telefone: </span> <span>{pedidoAberto.telefone ? pedidoAberto.telefone : "-"}</span></p>
 <p><span className={Styles.item}>Email: </span> <span>{pedidoAberto.email ? pedidoAberto.email : "-"}</span></p>
 <p><span className={Styles.item}>Cpf: </span> <span>{pedidoAberto.cpf}</span></p>
 </div>
 </div>

 <div className={Styles.informacoes}>
 <div className={Styles.headerItem}><p>Pedido</p></div>
 <div className={Styles.conteudoItem} style={{ display: "flex", flexDirection: "row", gap: 250 }}>
 <div className={Styles.itemPedido}>
 {pedidoAberto.itens.map((item, i) =>
 <div style={{ display: "block" }} key={i}>
 <span>{item.quantidade}X</span> <span>{item.item}</span>
 </div>
 )}
 </div>
 <div className={Styles.itemPreco}>
 {pedidoAberto.itens.map((item, i) =>
 <div key={i}>
 <span>R$ {item.preco}</span>
 </div>)}
 </div>
 </div>
 <p className={Styles.totalParagrafo}><span className={Styles.item}>Total: </span> <span>R$ {pedidoAberto.total}</span></p>
 </div>


 </div>
 </div>
 <div className={Styles.botoesDiv}>
 {pedidoAberto.estado == "PENDENTE" && <button className={Styles.botaoRecusar} onClick={recusarPedido}>Recusar pedido</button>}
 {pedidoAberto.estado == "PENDENTE" ?
 <button className={Styles.botaoAceitar} onClick={aceitarPedido}>Aceitar</button> :
 (pedidoAberto.estado == "EM_ANDAMENTO" ?
 <button className={Styles.botaoAceitar} onClick={aprontarPedido}>Pedido pronto</button> :
 <button className={Styles.botaoAceitar} onClick={entregarPedido}>Pedido entregue</button>
 )}
 </div>
 </div>


 );
}


