import React from "react";
import styles from "./AllBurgersSection.module.css";
import { PiPlusCircleBold } from "react-icons/pi";
import { AiFillStar } from "react-icons/ai";

export default function AllBurgersSection() {
  const grilledBurgersList = [
    {
      image:
        "https://res.cloudinary.com/dwudnu5e3/image/upload/v1690086462/BurgerChaos/doubleBeefBurger-min_w5u0kv.png",
      name: "Double Beef Burger",
      description:
        "Un burger avec deux galettes de bœuf, du fromage et des légumes frais. Un plaisir pour les amateurs de viande !",
      price: "10.90€",
      notation: 4.8,
    },
    {
      image:
        "https://res.cloudinary.com/dwudnu5e3/image/upload/v1690086463/BurgerChaos/spicyBeefBurger-min_v1xki0.png",
      name: "spicy beef burger",
      description:
        "Un burger épicé avec des galettes de bœuf relevées, des légumes croquants et une sauce spéciale.",
      price: "8.90€",
      notation: 4.5,
    },
    {
      image:
        "https://res.cloudinary.com/dwudnu5e3/image/upload/v1690086462/BurgerChaos/CheeseBeefBurger-min_dewajl.png",
      name: "cheese beef burger",
      description:
        "Un classique avec du bœuf succulent et du fromage fondu. Une explosion de saveurs !",
      price: "9.90€",
      notation: 5,
    },
    {
      image:
        "https://res.cloudinary.com/dwudnu5e3/image/upload/v1690086461/BurgerChaos/MenuBurger-min_sbn2ub.png",
      name: "combo cheese beef Burger",
      description:
        "Le combo parfait avec burger, frites et boisson. Un repas complet en une seule commande.",
      price: "19.90€",
      notation: 4,
    },
  ];

  const chickenBurgersList = [
    {
      image: "burgers/1.png",
      name: "Chicken Burger Cream",
      description:
        "Un burger crémeux et délicieux avec des galettes de poulet tendres, des légumes frais et une sauce spéciale.",
      price: "10.90€",
      notation: 4.8,
    },
    {
      image: "burgers/2.png",
      name: "Tenders box",
      description:
        "De véritables morceaux de poulet tendres et savoureux, des légumes croquants et une sauce spéciale.",
      price: "8.90€",
      notation: 4.5,
    },
    {
      image: "burgers/4.png",
      name: "Chicken Burger Classic",
      description:
        "Un classique délicieux avec du poulet succulent et du fromage fondu. Un goût unique !",
      price: "9.90€",
      notation: 4,
    },
  ];

  const otherList = [
    {
      image: "burgers/2.png",
      name: "Gateâu chocolat maison",
      description:
        "Un burger crémeux et délicieux avec des galettes de poulet tendres, des légumes frais et une sauce spéciale.",
      price: "5.90€",
      notation: 4.8,
    },
    {
      image: "burgers/3.png",
      name: "Café gourmand",
      description:
        "De véritables morceaux de poulet tendres et savoureux, des légumes croquants et une sauce spéciale.",
      price: "6.90€",
      notation: 4.5,
    },
    {
      image: "burgers/4.png",
      name: "CupeCake café",
      description:
        "Un classique délicieux avec du poulet succulent et du fromage fondu. Un goût unique !",
      price: "4.90€",
      notation: 4,
    },
  ];



  const grilledBurgersMap = grilledBurgersList.map((burger, i) => {
    let notation = [];
    for (let j = 0; j < burger.notation; j++) {
      notation.push(<AiFillStar className={styles.starsNotation} />);
    }

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
            <p>
              <PiPlusCircleBold className={styles.add_ico} />
              {burger.price}
            </p>
            <p>{notation}</p>
          </div>
        </div>
      </div>
    );
  });
  const chickenBurgersMap = chickenBurgersList.map((burger, i) => {
    let notation = [];
    for (let j = 0; j < burger.notation; j++) {
      notation.push(<AiFillStar className={styles.starsNotation} />);
    }

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
            <p>
              <PiPlusCircleBold className={styles.add_ico} />
              {burger.price}
            </p>
            <p>{notation}</p>
          </div>
        </div>
      </div>
    );
  });
  const othersMap = otherList.map((burger, i) => {
    let notation = [];
    for (let j = 0; j < burger.notation; j++) {
      notation.push(<AiFillStar className={styles.starsNotation} />);
    }

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
            <p>
              <PiPlusCircleBold className={styles.add_ico} />
              {burger.price}
            </p>
            <p>{notation}</p>
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
            <a href="http://">Desserts</a>
          </li>
        </ul>
      </div>
      <div className={styles.burgers_container}>{othersMap}</div>
    </div>
  );
}
