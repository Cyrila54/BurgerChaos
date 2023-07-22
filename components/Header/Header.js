import React from 'react'
import MenuSection from '../MenuSection/MenuSection';
import { FaShoppingCart, FaUser } from "react-icons/fa";
import styles from './Header.module.css'
export default function Header() {
    

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Burger Chaos</h1>
      </div>
      <div className={styles.menu}>
        <MenuSection />
      </div>
      <div className={styles.informations}>
        <a href="tel:+33629281859">+33 6 29 28 18 59</a>
        <FaShoppingCart className={styles.ico} />
        <FaUser className={styles.ico} />
      </div>
    </header>
  );
}
