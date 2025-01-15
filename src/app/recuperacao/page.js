import Image from "next/image";
import Link from "next/link";
import Styles from "./page.module.css"
import Logo from "../assets/logogn.jpg";


export default function Home() {
  return (
    <main className={Styles.main}>
      <div className={Styles.layout}>
        <div className={Styles.orange}>

            <Image alt="Logo do projeto" src={Logo}className={Styles.logo}></Image>

        </div>

        <div className={Styles.container}>
        <h1 className={Styles.text}>REDEFINIR SENHA</h1>
        <p className={Styles.text2}>Esqueceu sua senha?</p>
          <Link href={'/cardapio'}><p className={Styles.text2}>Informe um email e enviaremos intruções de como recuperar sua senha. </p></Link>
          <div className={Styles.botton}>

            <input  className={Styles.but} type="text" placeholder="Email" />


          </div>

          <div className="enviar">
           <Link href={'/cardapio'}><input className={Styles.botao} type="button" value="ENVIAR"></input></Link> 
          </div>
        </div>
      </div>
     
      <div className={Styles.footer}>
      </div>
      <Link href={'/cardapio'}></Link>
    </main>
  );
}






