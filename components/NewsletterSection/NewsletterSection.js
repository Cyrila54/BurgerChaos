import React from "react";
import styles from "./NewsletterSection.module.css";
import { FaEnvelope } from "react-icons/fa";
export default function NewsletterSection() {
  return (
    <div className={styles.newsletter_container}>
      <div className={styles.container}>
        <div className={styles.leftPart}>
          <h2>Abonnez-vous à notre newsletter</h2>
          <p>
            Abonnez-vous à la newsletter et obtenez un bon de réduction de 15%
          </p>
          <div className={styles.email_input}>
            <input type="mail" placeholder="votre adresse email" />
            <button>
              <FaEnvelope className={styles.envelop_ico} />
              S'abonner
            </button>
          </div>
        </div>
        <div className={styles.rightPart}>
          <img
            src="https://res.cloudinary.com/dwudnu5e3/image/upload/v1690125761/BurgerChaos/burger_newsletter-min_xwcgoz.png"
            alt="burger newsletter"
          />
        </div>
      </div>
    </div>
  );
}
