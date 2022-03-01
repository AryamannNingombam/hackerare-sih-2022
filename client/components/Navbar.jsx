import { Input } from "antd";
import Image from "next/image";
import React from "react";
import swayamLogo from "./assets/SwayamLogo.png";
import styles from "../styles/Navbar.module.scss";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navController}>
        <div>
          <Image src={swayamLogo} />
        </div>
        <div>
          <Input.Search
            size="large"
            placeholder="Search for Products, Self help groups and more"
            className={styles.search}
          />
        </div>
      </div>
      <div className={styles.navController}>
          <a>Explore Store</a>
          <a>Self Help Groups</a>
          <a>Welfare Schemes</a>
          <a>Become a seller</a>
          <CgProfile style={{ fontSize:"1.2rem"}}/>
      </div>
    </div>
  );
}
