import React from "react";
import swayamLogo from "./assets/svayam-logo.svg";
import styles from "../styles/Navbar.module.scss";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { logoutUser } from "store/user.slice";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);
  return (
    <div className={styles.navContainer}>
      <div className={styles.navController}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={swayamLogo} />
          </Link>
        </div>
        {/* <Input.Search
          size="large"
          placeholder="Search for Products, Self help groups and more"
          className={styles.search}
        /> */}
      </div>
      <div className={styles.navController}>
        <Link href="/store">
          <a>Explore Store</a>
        </Link>
        <Link href="/shg">
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

            <CgProfile style={{ fontSize: "1.2rem", margin: "0 1rem" }} />
          </>
        )}
        {!isLoggedIn && (
          <>
            <Link href="/login">
              <Button>Login</Button>
            </Link>
            <Link href="/register">
              <Button
                style={{
                  marginLeft: "1rem",
                }}
              >
                Register
              </Button>
            </Link>
          </>
        )}

        {isLoggedIn && (
          <Button
            danger
            onClick={() => {
              dispatch(logoutUser());
              localStorage.clear();
              router.push("/");
            }}
          >
            Logout
          </Button>
        )}
      </div>
    </div>
  );
}
