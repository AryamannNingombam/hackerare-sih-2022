import Navbar from "components/Navbar";
import styles from "styles/Home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/scrollbar";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";
import image6 from "./assets/image6.png";

import i0 from "./assets/0.png";
import i1 from "./assets/1.png";
import i2 from "./assets/2.png";
import i3 from "./assets/3.png";
import i4 from "./assets/4.png";
import i5 from "./assets/5.png";

import { Card, Row, Col } from "antd";

import { useQuery } from "react-query";
import { GetAllProducts } from "services/product.services";
import Script from "next/script";

export default function Home() {
  const { data, isLoading } = useQuery("get-listed-products", GetAllProducts);
  console.log(data);

  return (
    <>
      <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></Script>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.LeftSection}>
          Now buy and sell handcrafted items from any corner of India.
        </div>
        <div className={styles.RightSection}>
          {isLoading ? (
            <>Getting Items for you!</>
          ) : (
            <Swiper
              autoplay={{ delay: 1500 }}
              slidesPerView={1}
              navigation
              loop
            >
              {data &&
                data.products.map((item, idx) => {
                  return (
                    <SwiperSlide
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      key={idx}
                    >
                      <Card
                        hoverable
                        className={styles.card}
                        style={{ width: 400, height: 500 }}
                        cover={
                          <Image
                            src={item.images[0]}
                            height={200}
                            width={350}
                            objectFit="cover"
                            className={styles.img}
                          />
                        }
                      >
                        <div className={styles.cardContent}>
                          <div>
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                          </div>
                          <div>
                            <h3>Rs. {item.sellPrice}</h3>
                          </div>
                        </div>
                        <div className={styles.cardDesc}>
                          Bidar is the centre for the manufacture of these
                          unique metal handicrafts which developed during the
                          14th cent...
                        </div>
                      </Card>
                    </SwiperSlide>
                  );
                })}
              {/* <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  hoverable
                  className={styles.card}
                  style={{ width: 400 }}
                  cover={
                    <Image
                      src={basket}
                      height={500}
                      objectFit="cover"
                      className={styles.img}
                    />
                  }
                >
                  <div className={styles.cardContent}>
                    <div>
                      <h1>Jute Bags</h1>
                      <p>Sitaraman Crafts</p>
                    </div>
                    <div>
                      <h1>Rs. 50</h1>
                    </div>
                  </div>
                  <div className={styles.cardDesc}>
                    Bidar is the centre for the manufacture of these unique
                    metal handicrafts which developed during the 14th cent...
                  </div>
                </Card>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  hoverable
                  className={styles.card}
                  style={{ width: 400 }}
                  cover={
                    <Image
                      className={styles.card}
                      src={handi}
                      height={240}
                      objectFit="cover"
                    />
                  }
                >
                  <div className={styles.cardContent}>
                    <div>
                      <h1>Handicrafts</h1>
                      <p>Sitaraman Crafts</p>
                    </div>
                    <div>
                      <h1>Rs. 90</h1>
                    </div>
                  </div>
                  <div className={styles.cardDesc}>
                    Bidar is the centre for the manufacture of these unique
                    metal handicrafts which developed during the 14th cent...
                  </div>
                </Card>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  hoverable
                  className={styles.card}
                  style={{ width: 400 }}
                  cover={
                    <Image
                      className={styles.card}
                      src={bowl}
                      height={240}
                      objectFit="cover"
                    />
                  }
                >
                  <div className={styles.cardContent}>
                    <div>
                      <h1>Traditional Bowls</h1>
                      <p>Sitaraman Crafts</p>
                    </div>
                    <div>
                      <h1>Rs. 200</h1>
                    </div>
                  </div>
                  <div className={styles.cardDesc}>
                    Bidar is the centre for the manufacture of these unique
                    metal handicrafts which developed during the 14th cent...
                  </div>
                </Card>
              </SwiperSlide> */}
            </Swiper>
          )}
        </div>
      </div>
      <div className={styles.AboutSHG}>
        <div className={styles.LeftSection}>
          <h1>What are SHGs?</h1>
        </div>
        <div className={styles.RightSection}>
          A self-help group is a financial intermediary committee usually
          composed of 12 to 25 local women between the ages of 18 and 50. Most
          self-help groups are in India, though they can be found in other
          countries, especially in South Asia and Southeast Asia.
        </div>
      </div>
      <div className={styles.WelfareSchemes}>
        <Swiper autoplay spaceBetween={50} slidesPerView={2} loop>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <Image src={image4} height={100} objectFit="contain" />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <Image src={image5} height={100} objectFit="contain" />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <Image src={image6} height={100} objectFit="contain" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <df-messenger
            intent="WELCOME"
            chat-title="Svayam Bot"
            agent-id="39b60ba8-a091-47cb-880b-9e3ade88f6eb"
            language-code="en"
            chat-icon="https://i.ibb.co/Z2FtyBn/Frame-2.png"
          ></df-messenger>
          `,
        }}
      />

      <div className={styles.AboutSHG}>
        <div className={styles.LeftSection}>
          <h1>Bringing back the Original Craftmenship</h1>
        </div>
        <div className={styles.RightSection}>
          We at Svayam are committed in bringing back the original craftmenship
          of each corner of the country. We believe that the traditional
          craftmenship needs to be revived and brought back to the people of
          India.
        </div>
      </div>

      <div className={styles.AboutSHG}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Image src={i0} objectFit="contain" />
          </Col>
          <Col span={8}>
            <Image src={i1} objectFit="contain" />
          </Col>
          <Col span={8}>
            <Image src={i2} objectFit="contain" />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Image src={i3} objectFit="contain" />
          </Col>
          <Col span={8}>
            <Image src={i4} objectFit="contain" />
          </Col>
          <Col span={8}>
            <Image src={i5} objectFit="contain" />
          </Col>
        </Row>
      </div>
    </>
  );
}
