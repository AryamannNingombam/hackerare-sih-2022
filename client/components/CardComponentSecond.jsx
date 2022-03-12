import React from "react";
import styles from "../styles/CardComponentSecondary.module.scss";
import cardpicTwo from "./assets/cardpicTwo.jpg";
import Image from "next/image";
import { Card } from "antd";
import { useRouter } from "next/router";

export default function CardComponent({
  name,
  image,
  state,
  id,
}) {
  const router = useRouter();

  return (
    <div hoverable className={styles.cardContainer} onClick={() => {
      router.push(`/shg/${id}`);
    }}>
      <div className={styles.cardpic}>
        <Image src={cardpicTwo}  width={200} height={200} />
      </div>
      <h2>{name}</h2>
      <h3>{state}</h3>
    </div>
  );
}
