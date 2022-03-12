import CardComponent from "../components/CardComponent";
import Navbar from "../components/Navbar";
import styles from "../styles/ViewShg.module.scss";
import { Breadcrumb, Button } from "antd";
import ningombam from "./assets/ningombam.jpg";
import Image from "next/image";

export default function ViewSHG() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Breadcrumb className={styles.breadcrumb}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.colController}>
          <div className={styles.shgPic}>
            <Image src={ningombam} />
          </div>
          <h1>Ningombam Crafts</h1>
          <h2>Rajasthan</h2>
          <Button className={styles.shgJoinBtn}>REQUEST TO JOIN</Button>
          <div className={styles.stats}>
            <h1>3.7</h1>
            <h2>Ratings</h2>
            <h1>30</h1>
            <h2>Members</h2>
            <h1>10</h1>
            <h2>Products</h2>
          </div>
          <h3>DESCRIPTION</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            tellus purus, laoreet at eros eget, ultricies consequat tellus.
            Curabitur nec sagittis nisl, eu porttitor massa. Ut posuere semper
            luctus. Aliquam nunc ex, ornare non mattis sed, scelerisque non
            nisl. Vivamus convallis bibendum urna eget consequat. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Etiam tellus purus,
            laoreet at eros eget, ultricies consequat tellus. Curabitur nec
            sagittis nisl, eu porttitor massa. Ut posuere semper luctus. Aliquam
            nunc ex, ornare non mattis sed, scelerisque non nisl. Vivamus
            convallis bibendum urna eget consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Etiam tellus purus, laoreet at eros
            eget, ultricies consequat tellus. Curabitur nec sagittis nisl, eu
            porttitor massa. Ut posuere semper luctus. Aliquam nunc ex, ornare
            non mattis sed, scelerisque non nisl. Vivamus convallis bibendum
            urna eget consequat.{" "}
          </p>
        </div>
        <h3 className={styles.exploreHeading}>PRODUCTS</h3>
        <div className={styles.exploreSection}>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    </>
  );
}
