import React from "react";
import styles from "../styles/CardComponentSecondary.module.scss";
import cardpicTwo from "./assets/cardpicTwo.jpg";
import { Button, Image } from "antd";
import { Card } from "antd";
import { useRouter } from "next/router";

export default function CardComponent({ name, image, state, id }) {
  const router = useRouter();

  return (
    <Card hoverable className={styles.cardContainer}>
      <Image src={image} layout="fill" style={{objectFit:"cover"}} />
      <h2>{name}</h2>
      <h3>{state}</h3>
      <Button
        style={{
          marginTop: "1rem",
        }}
        onClick={() => {
          router.push(`/shg/${id}`);
        }}
      >
        Learn More
      </Button>
    </Card>
  );
}
