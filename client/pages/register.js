import Navbar from "components/Navbar";
import React from "react";
import styles from "../styles/Login.module.scss";
import Link from "next/link";
import { Button, Card, Form, Input } from "antd";

export default function register() {
  return (
    <>
      <Navbar />
      <div className={styles.registerContainer}>
        <Card className={styles.formCard}>
          <h1>Sign up with your email</h1>
          <span>
            Already have an account?
            <Link href="/login">
              <a>Sign In</a>
            </Link>
          </span>
          <Form
            name="register-form"
            initialValues={{ remember: true }}
            onSubmitCapture={(e) => {
              e.preventDefault();
              console.log("submit");
            }}
          >
            <Form.Item
              name="Full Name"
              rules={[
                {
                  required: true,
                  message: "Please input your Full Name!",
                },
              ]}
            >
              <Input placeholder="Full name" />
            </Form.Item>
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
              Continue
            </Button>
          </Form>
        </Card>
      </div>
    </>
  );
}
