import { Input } from "antd";
import Image from "next/image";
import React from "react";
import swayamLogo from "./assets/svayam-logo.svg";
import styles from "../styles/Navbar.module.scss";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { useSelector } from "react-redux";
export default function Navbar() {
  const { isLoggedIn } = useSelector((state) => state.user);
  return (
    <div className={styles.navContainer}>
      <div className={styles.navController}>
        <div className={styles.logo}>
          <Image src={swayamLogo} />
        </div>
        {/* <Input.Search
          size="large"
          placeholder="Search for Products, Self help groups and more"
          className={styles.search}
        /> */}
      </div>
      <div className={styles.navController}>
        {!isLoggedIn && (
          <Link href="/login">
            <a>Login</a>
          </Link>
        )}
        <Link href="/store">
          <a>Explore Store</a>
        </Link>
        <Link href="/login">
          <a>Self Help Groups</a>
        </Link>
        <Link href="/login">
          <a>Welfare Schemes</a>
        </Link>
        {isLoggedIn && (
          <>
            <Link href="/shg/create">
              <a>Become a seller</a>
            </Link>

            <Link href="/profile">
              <CgProfile style={{ fontSize: "1.2rem" }} />
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
