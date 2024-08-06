import Image from "next/image";
import "./teste.css";
import Link from "next/link";

// SP, o maior do Brasil

export default function Home() {
  return (
    <main className="main">
      <div className="layout">
        <div className="orange">

          <img src="./img/logogn.jpg" className="logo"></img>

        </div>
        <h1 style={{ textAlign: "center", marginTop: "90px", widht: "90px", height: "60px", color: "#AB2F2F", fontFamily: "Calibri, Helvetica, sans-serif" }}>LOGIN </h1>
        <div className="container">
          <div className="button">

            <input style={{border: "1px solid"}} className="but" type="text" placeholder="Email" />

            <input className="but" type="text" placeholder="Senha" />

          </div>

          <p className="text" style={{
            textAlign: "center", margin: "30px",
            color: "#AB2F2F", fontFamily: "Calibri, Helvetica, sans-serif", cursor: "pointer"
          }}>Esqueceu sua senha?</p>

          <div className="enviar">
            <input className="botao" type="button" value="ENTRAR"></input>
          </div>
        </div>
      </div>

      <div className="footer">
      </div>
      <Link href="/qualquer">Abrir a próxima página</Link>
    </main>
  );
}
