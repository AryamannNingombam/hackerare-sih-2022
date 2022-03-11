import CardComponent from "../components/CardComponent";
import Navbar from "../components/Navbar";
import styles from "../styles/Product.module.scss";
import { Breadcrumb, Button } from "antd";
import { AiOutlineShopping } from "react-icons/ai";

export default function Product() {
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
          <div className={styles.colOne}>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
          <div className={styles.colTwo}>
            <h1>Hand Crafted Utensils</h1>
            <h2>₹ 1000</h2>
            <Button type="primary" className={styles.button}>
              Buy Now
            </Button>
            <Button type="primary" className={styles.buttonTwo}>
              <AiOutlineShopping style={{ fontSize: "1rem" }} />
            </Button>
            <h3>DESCRIPTION</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              tellus purus, laoreet at eros eget, ultricies consequat tellus.
              Curabitur nec sagittis nisl, eu porttitor massa. Ut posuere semper
              luctus. Aliquam nunc ex, ornare non mattis sed, scelerisque non
              nisl. Vivamus convallis bibendum urna eget consequat.{" "}
            </p>
            <h3>SHIPPING POLICY</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              tellus purus, laoreet at eros eget, ultricies consequat tellus.
              Curabitur nec sagittis nisl, eu porttitor massa. Ut posuere semper
              luctus. Aliquam nunc ex, ornare non mattis sed, scelerisque non
              nisl. Vivamus convallis bibendum urna eget consequat. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Etiam tellus purus,
              laoreet at eros eget, ultricies consequat tellus. Curabitur nec
              sagittis nisl, eu porttitor massa. Ut posuere semper luctus.
              Aliquam nunc ex, ornare non mattis sed, scelerisque non nisl.
              Vivamus convallis bibendum urna eget consequat. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Etiam tellus purus, laoreet
              at eros eget, ultricies consequat tellus. Curabitur nec sagittis
              nisl, eu porttitor massa. Ut posuere semper luctus. Aliquam nunc
              ex, ornare non mattis sed, scelerisque non nisl. Vivamus convallis
              bibendum urna eget consequat.{" "}
            </p>
          </div>
        </div>
        <h3 className={styles.exploreHeading}>EXPLORE MORE</h3>
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
