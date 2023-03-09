import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <Head title="Ranek | Contato" description="Entre em Contato" />
      <img src={foto} alt="máquina de escrever"></img>
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>caioace@gmail.com</li>
          <li>00000-0000</li>
          <li>Rio de Janeiro - RJ</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
