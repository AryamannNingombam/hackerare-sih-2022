import Navbar from "components/Navbar";
import React, { useState } from "react";
import styles from "styles/Login.module.scss";
import {
  Button,
  Card,
  Form,
  Input,
  Upload,
  Select,
  message,
  Spin,
  DatePicker,
} from "antd";
import { useRouter } from "next/router";
import { UploadOnIPFS } from "services/ipfs.service";
import { AddProduct } from "services/product.services";
import { PlusOutlined } from "@ant-design/icons";

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

  const [fileList, setFileList] = useState([]);

  const router = useRouter();

  const onFormSubmit = async (values) => {
    console.log(values);
    console.log(fileList);
    values.images = fileList.map(async (image) => {
      const imageUrl = await UploadOnIPFS(image.originFileObj);
      return imageUrl;
    });
    const imageUrls = await Promise.all(values.images);
    values.images = imageUrls;
    await AddProduct(values).then((res) => {
      message.success("Product added successfully");
      router.push("/shg/products");
    });
  };

  const handleChange = ({ fileList }) => setFileList(fileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  function handleTagChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <Navbar />
      <div className={styles.loginContainer}>
        <Card className={styles.formCard}>
          <h1>Add Product</h1>
          <Spin spinning={false}>
            <Form
              name="login-form"
              initialValues={{ remember: true }}
              onFinish={onFormSubmit}
            >
              <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={handleChange}
                multiple
              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>
              {/* <div>
                <h3>Preview</h3>
                {imageUrls.length > 0 &&
                  imageUrls.map((url) => (
                    <Image
                      src={url}
                      width={200}
                      height={200}
                      objectFit="contain"
                    />
                  ))}
              </div> */}
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                name="seller"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Seller" />
              </Form.Item>
              <Form.Item
                name="sellPrice"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Price" />
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
                name="quantity"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Quantity" />
              </Form.Item>
              <Form.Item
                name="releaseDate"
                rules={[
                  {
                    required: true,
                    message: "Please input your date of release!",
                  },
                ]}
              >
                <DatePicker placeholder="Date of release" />
              </Form.Item>

              <Form.Item className={styles.TagSelector} name="labels">
                <Select
                  mode="tags"
                  style={{ width: "100%" }}
                  onChange={handleTagChange}
                  tokenSeparators={[","]}
                  placeholder="Add comma separated labels"
                />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.loginButton}
              >
                Add this Product
              </Button>
            </Form>
          </Spin>
        </Card>
      </div>
    </>
  );
}
