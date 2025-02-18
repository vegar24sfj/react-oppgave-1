import React from "react";
import Dish from "./dish";
import styles from "./menu.module.css";

function Menu({ meny }) {
  return (
    <div className={styles.menuContainer}>
      {meny.map((rett) => (
        <Dish key={rett.id} rett={rett} />
      ))}
    </div>
  );
}

export default Menu;
