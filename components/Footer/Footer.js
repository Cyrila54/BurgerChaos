import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <p>Le site <span>Crazy Burger</span> est un modèle original créé et inventé par Cyril ANDRIQUE.<br/> Toute reproduction est interdite.
      </p>
    </div>
  );
}
