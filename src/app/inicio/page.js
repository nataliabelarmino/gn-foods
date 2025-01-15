import Image from "next/image";
import Link from "next/link";
import Styles from "./page.module.css"
import Logo from "../assets/logoinicio.png";


export default function Home() {
  return (
    <main className={Styles.main}>
      <div className={Styles.layout}>
        <div className={Styles.orange}>

            <Image alt="Logo do projeto" src={Logo}className={Styles.logo}></Image>
            <h1 className={Styles.text}>GN FOODS PARA EMPREENDEDORES</h1>

        </div>

        <div className={Styles.container}>
          
          <div className="enviar">
           <Link href={'/login'}><input className={Styles.botao} type="button" value="ENTRAR"></input></Link> 
           <Link href={'/cardapio'}><input className={Styles.botao} type="button" value="CADASTRA-SE"></input></Link> 
          </div>
        </div>
      </div>
      <Link href={'/cardapio'}></Link>
    </main>
  );
}
