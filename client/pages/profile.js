import { Breadcrumb, Button } from 'antd';
import Navbar from 'components/Navbar';
import Image from 'next/image';
import React from 'react'
import { useQuery } from 'react-query';
import styles from "styles/ShgProfile.module.scss";
import UserImage from "pages/assets/user.svg";

export default function Profile({ uid }) {
    console.log("UIS", uid);
    const { data: shg } = useQuery("shg", () => GetSIHDetails(uid));
    const { data: shgProducts } = useQuery("shgProducts", () => GetAllProductsBySIH(uid));
    console.log(shgProducts);

  return (
    <>
      <Navbar />
      <div>
      </div>
    </>
  )
}

Profile.getInitialProps = async ({ query: { uid } }) => {
  return { uid };
};
