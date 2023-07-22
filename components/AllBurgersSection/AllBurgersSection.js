import React from "react";
import styles from "./AllBurgersSection.module.css";
import { PiPlusCircleBold} from 'react-icons/pi'

export default function AllBurgersSection() {
  const burgersList = [
    {
      image:
        "https://res.cloudinary.com/dwudnu5e3/image/upload/v1690028666/doubleBeefBurger-min_rwu9ci.png",
      name: "Double Beef Burger",
      description:
        "Un burger avec deux galettes de bœuf, du fromage et des légumes frais. Un plaisir pour les amateurs de viande !",
      price: "19€",
      notation: 4.8,
    },
    {
      image:
        "https://res.cloudinary.com/dwudnu5e3/image/upload/v1690028666/spicyBeefBurger-min_l2yyor.png",
      name: "spicy beef burger",
      description:
        "Un burger épicé avec des galettes de bœuf relevées, des légumes croquants et une sauce spéciale.",
      price: "19€",
      notation: 4.5,
    },
    {
      image:
        "https://res.cloudinary.com/dwudnu5e3/image/upload/v1690028666/CheeseBeefBurger-min_dctqwi.png",
      name: "cheese beef burger",
      description:
        "Un classique avec du bœuf succulent et du fromage fondu. Une explosion de saveurs !",
      price: "19€",
      notation: 5,
    },
    {
      image:
        "https://res.cloudinary.com/dwudnu5e3/image/upload/v1690028665/MenuBurger-min_jvon0r.png",
      name: "combo cheese beef Burger",
      description:
        "Le combo parfait avec burger, frites et boisson. Un repas complet en une seule commande.",
      price: "19€",
      notation: 4,
    },
  ];

  const burgersMap = burgersList.map((burger, i) => {
    return (
      <div className={styles.mainContent} key={i}>
        <div className={styles.leftPart}>
          <div className={styles.bg_burger}>
            <img src={burger.image} alt="burger" />
          </div>
        </div>
        <div className={styles.rightPart}>
          <h2>{burger.name}</h2>
          <p>{burger.description}</p>
          <div className={styles.price_And_Notation}>
            <p><PiPlusCircleBold className={styles.add_ico}/>{burger.price}</p>
            <p>{burger.notation}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.AllBurgersSection}>
      <div className={styles.family_burgers}>
        <ul>
          <li>
            <a href="http://">Grilled Burgers</a>
          </li>
          <li>
            <a href="http://">Chicken Burgers</a>
          </li>
          <li>
            <a href="http://">Végan Burgers</a>
          </li>
        </ul>
      </div>
      <div className={styles.burgers_container}>{burgersMap}</div>
    </div>
  );
}
