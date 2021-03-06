import CardComponent from "components/CardComponent";
import Navbar from "components/Navbar";
import styles from "styles/ViewShg.module.scss";
import { Breadcrumb, Button, message, Spin } from "antd";
import { Image } from "antd";
import { useQuery } from "react-query";
import { GetSIHDetails, RequestSIH } from "services/sih.services";
import UserImage from "pages/assets/user.svg";
import { GetAllProductsBySIH } from "services/product.services";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import ModalComponent from "components/ModalComponent";
import { useState } from "react";
import ningombam from "pages/assets/ningombam.jpg";

export default function ViewSHG({ uid }) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const { user, isLoggedIn } = useSelector((state) => state.user);
  const { data: shg, isLoading: shgLoading } = useQuery("shg", () =>
    GetSIHDetails(uid)
  );
  const { data: shgProducts, isLoading } = useQuery("shgProducts", () =>
    GetAllProductsBySIH(uid)
  );

  const checkUserType = () => {
    const uid = user?.user?._id;
    const member = shg?.members.find((memberid) => memberid === uid);
    if (!member) {
      return -1;
    }
    if (uid === shg?.owner) {
      return 0;
    }
    return 1;
  };

  console.log(shg);
  const OnRequestJoin = async (e) => {
    if (!isLoggedIn) {
      message.error("Please login to request for joining this SHG");
      router.push("/login");
      return;
    }
    try {
      const response = await RequestSIH({
        sih: uid,
      });
      console.log(response);
      message.success("Request sent successfully");
    } catch (err) {
      console.log("ERROR");
      console.log(err);
      message.error("error sending request");
    }
  };

  if (isLoading || shgLoading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  const showModal = () => {
    // setData(d);
    setShow(true);
  };
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
            <Image src={shg?.images ? shg.images[0] : UserImage} />
          </div>
          <h1>{shg?.name}</h1>
          <h2>{shg?.state}</h2>
          <Button
            onClick={() => {
              switch (checkUserType()) {
                case 0:
                  message.success("You are the owner of this SHG");
                  break;
                case 1:
                  message.success("You are a member of this SHG");
                  break;
                case -1:
                  OnRequestJoin();
              }
            }}
            className={styles.shgJoinBtn}
          >
            {checkUserType() === 0
              ? "You are the owner"
              : checkUserType() === 1
              ? "You are a member"
              : "Join this SHG"}
          </Button>
          <div className={styles.stats}>
            <h1>
              {/* <Button onClick={showModal}>{shg?.members?.length}</Button> */}
              {shg?.members?.length}
            </h1>
            <h2>{shg?.members?.length !== 1 ? "Members" : "Member"}</h2>
            <h1>{shg?.products?.length}</h1>
            <h2>{shg?.products?.length !== 1 ? "Products" : "Product"}</h2>
          </div>
          <h3>DESCRIPTION</h3>
          <p>{shg?.description}</p>
        </div>
        <h3 className={styles.exploreHeading}>
          PRODUCTS{" "}
          {checkUserType() === 0 && (
            <>
              <Button
                onClick={() => {
                  router.push("/shg/product/add/");
                }}
              >
                Add Product
              </Button>
            </>
          )}
        </h3>

        <div className={styles.exploreSection}>
          {console.log(shgProducts)}
          {shgProducts && shgProducts.products.length === 0 ? (
            <h2>No products available yet</h2>
          ) : (
            shgProducts?.products?.map((product) => {
              return (
                <CardComponent
                  name={product.name}
                  image={product.images[0]}
                  id={product._id}
                  description={product.description}
                />
              );
            })
          )}
        </div>
        <ModalComponent heading={"Member"} show={show} setShow={setShow}>
          <div className={styles.modalContent}>
            <div>
              <Image src={ningombam} />
            </div>
            <div>
              <h1>Aryamann</h1>
              <h2>Owner</h2>
            </div>
          </div>
        </ModalComponent>
      </div>
    </>
  );
}

ViewSHG.getInitialProps = async ({ query: { uid } }) => {
  return { uid };
};
