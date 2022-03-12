import Navbar from "components/Navbar";
import React from "react";
import styles from "styles/Login.module.scss";
import {
  Button,
  Card,
  Form,
  Input,
  Upload,
  DatePicker,
  message,
  Spin,
} from "antd";
import { useRouter } from "next/router";
import { UploadOnIPFS } from "services/ipfs.service";
import { AddProduct } from "services/product.services";
import { FileImageFilled } from "@ant-design/icons";
import Image from "next/image";

const { Dragger } = Upload;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default function addProduct() {
  // {
  //   name, description, sellPrice, releaseDate, images, labels;
  // }
  const [loading, setLoading] = React.useState(false);
  const [images, setImages] = React.useState([]);
  const [imageUrls, setImageUrls] = React.useState([]);
  const props = {
    name: "file",
    multiple: true,
    onChange(info) {
      setImageUrls([]);
      const { status } = info.file;
      if (status !== "uploading") {
        getBase64(info.file.originFileObj).then((url) => {
          setImageUrls((imageUrls) => [...imageUrls, url]);
        });
        setImages((images) => [...images, info.file.originFileObj]);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
    style: {
      padding: "0 2rem",
    },
  };
  const router = useRouter();

  const onFormSubmit = async (values) => {
    setLoading(true);
    try {
      values.dateFormed = new Date(values.dateFormed);
      values.images = images.map(async (image) => {
        const imageUrl = await UploadOnIPFS(image);
        return imageUrl;
      });
      const imageUrls = await Promise.all(values.images);
      values.images = imageUrls;
      const response = await AddProduct(values);
      console.log(response);
      setLoading(false);
      router.push("/shg");
      message.success("Successfully added Sih");
    } catch (err) {
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

          <Spin spinning={loading}>
            <Form
              name="login-form"
              initialValues={{ remember: true }}
              onFinish={onFormSubmit}
            >
              <Dragger {...props}>
                <p className="ant-upload-drag-icon" style={{ margin: 12 }}>
                  <FileImageFilled style={{ color: "#1d1d1d", margin: 0 }} />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from
                  uploading company data or other band files
                </p>
              </Dragger>
              <div>
                <h3>Preview</h3>
                {console.log(imageUrls)}
                {imageUrls.length > 0 &&
                  imageUrls.map((url) => (
                    <Image
                      src={url}
                      width={200}
                      height={200}
                      objectFit="contain"
                    />
                  ))}
              </div>
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
              <Form.Item
                name="dateFormed"
                rules={[
                  {
                    required: true,
                    message: "Please input your date of formation!",
                  },
                ]}
              >
                <DatePicker placeholder="Date of Formation" />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                className={styles.loginButton}
                disabled={loading}
              >
                Create Your SHG
              </Button>
            </Form>
          </Spin>
        </Card>
      </div>
    </>
  );
}
