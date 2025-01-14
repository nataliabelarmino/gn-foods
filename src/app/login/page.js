import Image from "next/image";
import Link from "next/link";
import Styles from "./page.module.css"


export default function Home() {
  return (
    <main className={Styles.main}>
      <div className={Styles.layout}>
        <div className={Styles.orange}>

          <img src="images/logogn.jpg" className={Styles.logo}></img>

        </div>
        <h1 style={{ textAlign: "center", marginTop: "90px", widht: "90px", height: "60px", color: "#AB2F2F", fontFamily: "Calibri, Helvetica, sans-serif" }}>LOGIN </h1>
        <div className={Styles.container}>
          <div className={Styles.botton}>

            <input  className={Styles.but} type="text" placeholder="Email" />

            <input className={Styles.but} type="text" placeholder="Senha" />

          </div>

          <p className={Styles.text}>Esqueceu sua senha?</p>
          <p className={Styles.text}>Não possui uma conta? Cadastre</p>


          <div className="enviar">
           <Link href={'/cardapio'}><input className={Styles.botao} type="button" value="ENTRAR"></input></Link> 
          </div>
        </div>
      </div>

      <div className={Styles.footer}>
      </div>
      <Link href={'/cardapio'}></Link>
    </main>
  );
}
