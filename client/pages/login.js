import Navbar from "components/Navbar";
import React from "react";
import styles from "../styles/Login.module.scss";
import Link from "next/link";
import { Button, Card, Form, Input } from "antd";

export default function login() {
  return (
    <>
      <Navbar />
      <div className={styles.loginContainer}>
        <Card className={styles.formCard}>
          <h1>Login with your email</h1>
          <span>
            New here?
            <Link href="/register">
              <a>Sign up</a>
            </Link>
          </span>
          <Form
            name="login-form"
            initialValues={{ remember: true }}
            onSubmitCapture={(e) => {
              e.preventDefault();
              console.log("submit");
            }}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input type="password" placeholder="Password" />
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