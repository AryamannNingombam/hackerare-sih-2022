import CardComponent from "components/CardComponent";
import Navbar from "components/Navbar";
import styles from "styles/ViewShg.module.scss";
import { Breadcrumb, Button } from "antd";
import ningombam from "pages/assets/ningombam.jpg";
import { Image } from 'antd';
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { GetSIHDetails } from "services/sih.services";
import UserImage from "pages/assets/user.svg";
import { GetAllProductsBySIH } from "services/product.services";

export default function ViewSHG({ uid }) {
  console.log("UIS", uid);
  const { data: shg } = useQuery("shg", () => GetSIHDetails(uid));
  const { data: shgProducts } = useQuery("shgProducts", () => GetAllProductsBySIH(uid));
  console.log(shgProducts);

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
            <Image src={shg?.profileImage ? shg.profileImage : UserImage} />
          </div>
          <h1>{shg?.name}</h1>
          <h2>{shg?.state}</h2>
          <Button className={styles.shgJoinBtn}>REQUEST TO JOIN</Button>
          <div className={styles.stats}>
            <h1>{shg?.members?.length}</h1>
            <h2>{shg?.members?.length !== 1 ? "Members" : "Member"}</h2>
            <h1>{shg?.products?.length}</h1>
            <h2>{shg?.products?.length !== 1 ? "Products" : "Product"}</h2>
          </div>
          <h3>DESCRIPTION</h3>
          <p>{shg?.description}</p>
        </div>
        <h3 className={styles.exploreHeading}>PRODUCTS</h3>
        <div className={styles.exploreSection}>
          {shgProducts?.products?.map((product) => {
            return (
              <CardComponent name={product.name} image={product.images[0]} />
            );
          })}
        </div>
      </div>
    </>
  );
}

ViewSHG.getInitialProps = async ({ query: { uid } }) => {
  return { uid };
};
