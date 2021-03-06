import Navbar from "components/Navbar";
import React from "react";
import styles from "../styles/Login.module.scss";
import Link from "next/link";
import { Button, Card, Form, Input, message } from "antd";
import { useRouter } from "next/router";
import { SignIn } from "services/auth.services";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/user.slice";

export default function login() {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();
  const onFormSubmit = async () => {
    setLoading(true)
    try {
      const response = await SignIn({
        email,
        password,
      });
      const userData = {
        token: response.token,
        user: response.userData,
      };
      dispatch(loginUser(userData));
      message.success("signed in!");
      router.push("/store");
    } catch (err) {
      console.log(err);
      message.error("error signing ");
    }
    setLoading(false)
  };

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
              <Input
                onChange={(e) => {
                  console.log(e.target.value);
                  setEmail(e.target.value);
                }}
                placeholder="Email"
              />
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
              <Input
                onChange={(e) => {
                  console.log(e.target.value);
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Button
              onClick={onFormSubmit}
              type="primary"
              htmlType="submit"
              className={styles.loginButton}
              loading={loading}
              disabled={loading}
            >
              Log in
            </Button>
          </Form>
        </Card>
      </div>
    </>
  );
}
