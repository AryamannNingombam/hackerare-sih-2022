import { Breadcrumb, Button } from "antd";
import Navbar from "components/Navbar";
import Image from "next/image";
import React from "react";
import { useQuery } from "react-query";
import styles from "styles/ShgProfile.module.scss";
import UserImage from "pages/assets/user.svg";
import { useSelector } from "react-redux";
import { GetAllProductsBySIH } from "services/product.services";
import { GetSIHDetails, GetUserSIH } from "services/sih.services";

export default function SHGDashboard() {
    const {data:shg} = useQuery('shg',GetUserSIH);
    console.log(shg);

  const { isLoggedIn } = useSelector((state) => state.user);
  return (
    <>
      <Navbar />
    {isLoggedIn && (
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
            <Image src={UserImage} />
          </div>
          <h1>Ningombam Crafts</h1>
          <h2>Rajasthan</h2>
          <div className={styles.btnController}>
            <Button className={styles.editProfile}>EDIT PROFILE</Button>
            <Button className={styles.manageProducts}>MANAGE PRODUCTS</Button>
          </div>
          <div className={styles.btnController}>
            <Button className={styles.addProfile}>ADD PEOPLE</Button>
            <Button className={styles.requests}>REQUESTS</Button>
          </div>
          <div className={styles.stats}>
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
          <h3 className={styles.exploreHeading}>PRODUCTS</h3>
          {/* <div className={styles.exploreSection}>
            {shgProducts?.products?.map((product) => {
              return (
                <CardComponent name={product.name} image={product.images[0]} />
              );
            })}
          </div> */}
        </div>
      </div>
          )}
    </>
  );
}
 