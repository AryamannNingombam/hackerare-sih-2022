import { Breadcrumb, Button, Form, Image, message, Input } from "antd";
import Navbar from "components/Navbar";
import React, { useState } from "react";
import { useQuery } from "react-query";
import styles from "styles/ShgProfile.module.scss";
import UserImage from "pages/assets/user.svg";
import { useSelector } from "react-redux";
import { GetAllProductsBySIH } from "services/product.services";
import {
  AcceptUserRequest,
  AddUserToSIH,
  GetAllSIHRequests,
  GetSIHDetails,
  GetUserSIH,
  RejectUserRequest,
} from "services/sih.services";
import ModalComponent from "components/ModalComponent";
import ningombam from "pages/assets/ningombam.jpg";

export default function SHGDashboard() {
  const { data: shg } = useQuery("shg", GetUserSIH);
  const { data: requests } = useQuery("requests", GetAllSIHRequests);
  console.log(shg);
  console.log(requests);
  const { isLoggedIn } = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const [secondShow, setSecondShow] = useState(false);
  const [data, setData] = useState({});
  const onEmailSubmittion = async ({ email }) => {
    try {
      const response = await AddUserToSIH({
        email,
      });
      console.log(response);
      message.success("user added");
    } catch (err) {
      console.log("ERROR");
      console.log(err);
      message.error("error adding user");
    }
  };
  const onRequestSubmittion = async (uid, type) => {
    try {
      if (type === "ACCEPT") {
        const response = await AcceptUserRequest(uid);
        console.log(response);
        message.success("request approved");
      } else {
        const response = await RejectUserRequest(uid);
        console.log(response);
        message.success("request rejected");
      }
    } catch (err) {
      console.log("ERROR");
      console.log(err);
      message.error("error accepting request");
    }
  };
  const showModal = () => {
    // setData(d);
    setShow(true);
  };

  const showModalSecond = () => {
    // setData(d);
    setSecondShow(true);
  };
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
            <h1>{shg?.name}</h1>
            <h2>{shg?.state}</h2>
            <div className={styles.btnController}>
              <Button className={styles.editProfile}>EDIT PROFILE</Button>
              <Button className={styles.manageProducts}>MANAGE PRODUCTS</Button>
            </div>
            <div className={styles.btnController}>
              <Button className={styles.addProfile} onClick={showModalSecond}>
                ADD PEOPLE
              </Button>
              <Button className={styles.requests} onClick={showModal}>
                REQUESTS
              </Button>
            </div>
            <div className={styles.stats}>
              <h1>{shg?.members?.length}</h1>
              <h2>Members</h2>
              <h1>{shg?.products?.length}</h1>
              <h2>Products</h2>
            </div>
            <h3>DESCRIPTION</h3>
            <p>
            {shg?.description}
            </p>
            <h3 className={styles.exploreHeading}>PRODUCTS</h3>
            {/* <div className={styles.exploreSection}>
            {shgProducts?.products?.map((product) => {
              return (
                <CardComponent name={product.name} image={product.images[0]} />
              );
            })}
          </div> */}
            <ModalComponent heading={"Requests"} show={show} setShow={setShow}>
              {requests?.map((req) => (
                <div className={styles.user}>
                  <div className={styles.left}>
                    <div className={styles.image}>
                      <img src={req.profileImage || ningombam} />
                    </div>
                    <div>
                      <h3>{req.email}</h3>
                      <h6>{req.status}</h6>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <Button
                      onClick={() => {
                        onRequestSubmittion(req._id, "ACCEPT");
                      }}
                    >
                      Accept
                    </Button>
                    <Button
                      onClick={() => {
                        onRequestSubmittion(req._id, "REJECT");
                      }}
                    >
                      Reject
                    </Button>
                  </div>
                </div>
              ))}
            </ModalComponent>
            <ModalComponent
              heading={"Add People"}
              show={secondShow}
              setShow={setSecondShow}
              className={styles.addPeopleForm}
            >
              <Form
                name="register-form"
                initialValues={{ remember: true }}
                onFinish={onEmailSubmittion}
              >
                <Form.Item name="email">
                  <Input placeholder="Enter Email" />
                </Form.Item>
                <Button
                  className={styles.formItem}
                  htmlType="submit"
                  type="submit"
                >
                  Send Invite
                </Button>
              </Form>
            </ModalComponent>
          </div>
        </div>
      )}
    </>
  );
}
