import React from "react";
import styles from "./HeroSection.module.css";
import {BsArrowRightShort} from 'react-icons/bs'

export default function HeroSection() {
  return (
    <div className={styles.HeroSection}>
      <div className={styles.leftPart}>
        <h4>Le burger original</h4>
        <h1>
          Savoureux & <br />
          Délicieux
        </h1>
        <p>
          Un délicieux burger fait à partir de bœuf français de haute
          qualité, soigneusement transformé pour créer un goût juteux et
          savoureux.
        </p>
        <button className={styles.order_btn}><BsArrowRightShort className={styles.arrow_order_ico}/>Commander maintenant</button>
      </div>
      <div className={styles.rightPart}>
        <img
          src="https://res.cloudinary.com/dwudnu5e3/image/upload/v1690011842/original_burger-min_bzfapd.png"
          alt=""
        />
      </div>
    </div>
  );
}
