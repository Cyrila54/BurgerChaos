import React from "react";
import styles from "./MenuSection.module.css";
import { GiHamburger } from "react-icons/gi";

export default function MenuSection() {
  const menuList = (
    <div className={styles.menu}>
      <nav>
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );

  return (
    <div className={styles.menuContainer}>
      <div className={styles.mobileMenu}>
        <GiHamburger />
      </div>
      {menuList}
    </div>
  );
}
