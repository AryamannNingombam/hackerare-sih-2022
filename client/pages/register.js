import Navbar from "components/Navbar";
import React from "react";
import styles from "../styles/Login.module.scss";
import Link from "next/link";
import { Button, Card, Form, Input, message } from "antd";
import { SignUp } from "services/auth.services";
import { useRouter } from "next/router";

export default function register() {
  const router = useRouter();
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
            onFinish={async (e) => {
              try {
                const response = await SignUp(e);
                console.log(response);
                message.success("Sign up successful. Please proceed to login");
                router.push("/login");
              } catch (err) {
                message.error("error signing up");
              }
            }}
          >
            <Form.Item
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Please input your First Name!",
                },
              ]}
            >
              <Input placeholder="First name" />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please input your Last Name!",
                },
              ]}
            >
              <Input placeholder="Last Name" />
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
              Sign Up
            </Button>
          </Form>
        </Card>
      </div>
    </>
  );
}
