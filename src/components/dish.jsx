import React from "react";
import styles from "./dish.module.css";

function Dish({ rett }) {
  return (
    <div className={styles.dishCard}>
      <h3 className={styles.title}>{rett.tittel}</h3>
      <p className={styles.price}>{rett.pris}</p>
      <p className={styles.ingredients}>Ingredienser: {rett.ingredienser}</p>
      <p className={styles.category}>Kategori: {rett.kategori}</p>
    </div>
  );
}

export default Dish;
