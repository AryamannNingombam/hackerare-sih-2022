import React from "react";
import { Card } from "antd";
import styles from "../styles/CardComponent.module.scss";
import cardpic from "./assets/cardpic.jpg";
import Image from "next/image";

export default function CardComponent() {
  return (
    <div>
      <Card className={styles.cardContainer}>
        <Image src={cardpic} />
        <div className={styles.detailsTwo}>
          Ningombam Crafts
          <span>Manipur, India</span>
        </div>
      </Card>
    </div>
  );
}
