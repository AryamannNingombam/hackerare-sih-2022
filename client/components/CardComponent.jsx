import React from "react";
import { Card } from "antd";
import styles from "../styles/CardComponent.module.scss";
import { Image } from 'antd';
import { CgArrowRight } from "react-icons/cg";
import { useRouter } from "next/router";
export default function CardComponentSecondary({
  name,
  image,
  description,
  id,
}) {
  const router = useRouter();
  return (
    <Card
      hoverable
      className={styles.cardContainer}
      onClick={() => {
        router.push(`/shg/product/${id}`);
      }}
    >
      <Image src={image} objectFit="cover" height={400} width={300} />
      <div className={styles.details}>
        {name}
        <CgArrowRight style={{ fontSize: "1.4rem", color: "#FF8A1B" }} />
      </div>
      <p>{description}</p>
    </Card>
  );
}
