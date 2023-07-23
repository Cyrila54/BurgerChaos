import React, { useState } from "react";
import styles from "./AllBurgersSection.module.css";
import { PiPlusCircleBold } from "react-icons/pi";
import { AiFillStar } from "react-icons/ai";

export default function AllBurgersSection() {
  const [grilledBurgerSelected, setGrilledBurgerSelected] = useState(true);
  const [chickenBurgerSelected, setChickenBurgerSelected] = useState(false);
  const [dessertSelected, setDessertSelected] = useState(false);

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
      name: "Supreme Meal",
      description:
        "Le combo parfait avec burger, frites et boisson. Un repas complet en une seule commande.",
      price: "19.90€",
      notation: 4,
    },
  ];

  const chickenBurgersList = [
    {
      image:
        "https://res.cloudinary.com/dwudnu5e3/image/upload/v1690091653/BurgerChaos/ChickenBurgerCream-min_dxitwg.png",
      name: "Chicken Burger Cream",
      description:
        "Un burger crémeux et délicieux avec des galettes de poulet tendres, des légumes frais et une sauce spéciale.",
      price: "10.90€",
      notation: 4.8,
    },
    {
      image:
        "https://res.cloudinary.com/dwudnu5e3/image/upload/v1690091654/BurgerChaos/TendersBox-min_so6wcl.png",
      name: "Tenders box",
      description:
        "De véritables morceaux de poulet tendres et savoureux, des légumes croquants et une sauce spéciale.",
      price: "8.90€",
      notation: 4.5,
    },
    {
      image:
        "https://res.cloudinary.com/dwudnu5e3/image/upload/v1690091653/BurgerChaos/ChickenBurgerClassic-min_qga48b.png",
      name: "Chicken Burger Classic",
      description:
        "Un classique délicieux avec du poulet succulent et du fromage fondu. Un goût unique !",
      price: "9.90€",
      notation: 4,
    },
    {
      image:
        "https://res.cloudinary.com/dwudnu5e3/image/upload/v1690096763/BurgerChaos/chickenWings-min_kki9n7.png",
      name: "Chicken Wings",
      description:
        "Des ailes de poulet croustillantes et savoureuses, marinées dans des épices exquises pour une explosion de saveurs à chaque bouchée.",
      price: "9.90€",
      notation: 4,
    },
  ];

  const dessertsList = [
    {
      image:
        "https://res.cloudinary.com/dwudnu5e3/image/upload/v1690091653/BurgerChaos/ChocolateCake-min_f4fhuq.png",
      name: "Gâteau chocolat",
      description:
        "Un délicieux gâteau au chocolat fait maison qui fond dans la bouche, une vraie gourmandise !",
      price: "5.90€",
      notation: 4.8,
    },
    {
      image:
        "https://res.cloudinary.com/dwudnu5e3/image/upload/v1690091653/BurgerChaos/GourmetCoffee-min_x250tu.png",
      name: "Café gourmand",
      description: "Un café gourmand accompagné de petits plaisirs...",
      price: "6.90€",
      notation: 4.5,
    },
    {
      image:
        "https://res.cloudinary.com/dwudnu5e3/image/upload/v1690091653/BurgerChaos/CoffeeCupecake-min_ka4nbg.png",
      name: "CupeCake café",
      description:
        "Un délicieux cupcake au café avec des petits éclats de noisettes. un régale !",
      price: "4.90€",
      notation: 4,
    },
    {
      image:
        "https://res.cloudinary.com/dwudnu5e3/image/upload/v1690096745/BurgerChaos/Bavarois-min_eswssi.png",
      name: "Bavarois fraise",
      description:
        "Découvrez le délice du Bavarrois à la fraise, une pâtisserie légère et raffinée.",
      price: "4.90€",
      notation: 5,
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
  const dessertsMap = dessertsList.map((burger, i) => {
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

  const handleActiveGrilledBurgers = () => {
    setGrilledBurgerSelected(true);
    setChickenBurgerSelected(false);
    setDessertSelected(false);

  };
  const handleActiveChickenBurgers = () => {
    setGrilledBurgerSelected(false);
    setChickenBurgerSelected(true);
    setDessertSelected(false);
  };
  const handleActiveDesserts = () => {
    setGrilledBurgerSelected(false);
    setChickenBurgerSelected(false);
    setDessertSelected(true);
  };

  return (
    <div className={styles.AllBurgersSection}>
      <div className={styles.family_burgers}>
        <ul>
          <li
            onClick={() => handleActiveGrilledBurgers()}
            className={grilledBurgerSelected ? styles.active : ""}
          >
            Grilled Burgers
          </li>
          <li
            onClick={() => handleActiveChickenBurgers()}
            className={chickenBurgerSelected ? styles.active : ""}
          >
            Chicken Burgers
          </li>
          <li
            onClick={() => handleActiveDesserts()}
            className={dessertSelected ? styles.active : ""}
          >
            Desserts
          </li>
        </ul>
      </div>
      <div className={styles.burgers_container}>
        {grilledBurgerSelected && grilledBurgersMap}
        {chickenBurgerSelected && chickenBurgersMap}
        {dessertSelected && dessertsMap}
      </div>
    </div>
  );
}
