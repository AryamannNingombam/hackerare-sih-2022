import React from "react";
import styles from "../styles/CardComponentSecondary.module.scss";
import cardpicTwo from "./assets/cardpicTwo.jpg";
import Image from "next/image";

export default function CardComponent() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardpic}>
        <Image src={cardpicTwo}  />
      </div>
      <h2>Ningombam Crafts</h2>
      <h3>Rajasthan</h3>
    </div>
  );
}
