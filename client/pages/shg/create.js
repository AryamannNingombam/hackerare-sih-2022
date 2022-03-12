import Navbar from "components/Navbar";
import React from "react";
import styles from "styles/Login.module.scss";
import { Button, Card, Form, Input, message } from "antd";
import { useRouter } from "next/router";
import { UploadOnIPFS } from "services/ipfs.service";
import { AddSIH } from "services/sih.services";
export default function create() {
  const router = useRouter();
  const onFormSubmit = async (values) => {
    try {
      const ipfsImages = await values.images.map(async (image) => {
        const url = await UploadOnIPFS(image);
        return url;
      });
      const response = await AddSIH({
        ...values,
        images: ipfsImages,
      });
      console.log(response);
      message.success("Successfully added Sih");
    } catch (err) {
      console.log("ERROR");
      console.log(err);
      message.error("error creating shg");
    }
  };
  return (
    <>
      <Navbar />
      <div className={styles.loginContainer}>
        <Card className={styles.formCard}>
          <h1>Create an SHG Account</h1>

          <Form
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={onFormSubmit}
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Name of your Self Help Group" />
            </Form.Item>
            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input.TextArea
                rows={5}
                placeholder="Give a description of your Self Help Group"
              />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input placeholder="Phone Number" />
            </Form.Item>
            <Form.Item
              name="state"
              rules={[
                {
                  required: true,
                  message: "Please input your State!",
                },
              ]}
            >
              <Input placeholder="State" />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginButton}
            >
              Log in
            </Button>
          </Form>
        </Card>
      </div>
    </>
  );
}
