import React from "react";
import { Card } from "antd";
import styles from "../styles/CardComponent.module.scss";
import cardpic from "./assets/cardpic.jpg";
import Image from "next/image";
import { CgArrowRight } from "react-icons/cg";

export default function CardComponentSecondary({ name, image }) {
  return (
    <div>
      <Card className={styles.cardContainer}>
        <Image src={image} />
        <div className={styles.details}>
          {name}{" "}
          <CgArrowRight style={{ fontSize: "1.4rem", color: "#FF8A1B" }} />
        </div>
      </Card>
    </div>
  );
}
