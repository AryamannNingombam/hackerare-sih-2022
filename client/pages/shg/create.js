import Navbar from "components/Navbar";
import React from "react";
import styles from "styles/Login.module.scss";
import { Button, Card, Form, Input, message } from "antd";
import { useRouter } from "next/router";

export default function create() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const onFormSubmit = async (values) => {
    console.log(values);
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
              name="gstin"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="GSTIN Number" />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Phone Number" />
            </Form.Item>
            <Form.Item
              name="Address"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Address" />
            </Form.Item>
            <Form.Item
              name="State"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="State" />
            </Form.Item>
            <Form.Item
              name="City"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="City" />
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
