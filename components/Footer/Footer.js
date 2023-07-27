import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.logo}>
        <img src="burger.png" alt="burger" className={styles.imglogo} />
        <div className={styles.textLogo}>
          <p>Crazy</p>
          <p>Burger</p>
        </div>
      </div>
      <div className={styles.textFooter}>
        <p>contactez-nous</p>
      </div>

      <div className={styles.cards}>
        Paiement accepté
        <img src="100677181517645217876.png" alt="" />
      </div>
    </div>
  );
}

/*         <p>
          Le site <span>Crazy Burger</span> est un modèle original de site
          e-commerce créé et inventé par Cyril ANDRIQUE.
          <br /> Toute reproduction est interdite.
        </p>; */
