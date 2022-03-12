import Navbar from "components/Navbar";
import styles from "../styles/Home.module.scss";
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
import basket from "./assets/basket.jpeg";
import handi from "./assets/handi.jpeg";
import bowl from "./assets/bowl.jpg";

import { Button, Card } from "antd";

import { useQuery } from "react-query";

export default function Home() {
  // const {data, isLoading} = useQuery("get-listed-products", , {
  //   onSuccess(){
  //     console.log("Nice")
  //   }
  // });

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.LeftSection}>
          Now buy and sell handcrafted items from any corner of India.
        </div>
        <div className={styles.RightSection}>
          <Swiper autoplay={{ delay: 1500 }} slidesPerView={1} navigation loop>
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
                  Bidar is the centre for the manufacture of these unique metal
                  handicrafts which developed during the 14th cent...
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
                  Bidar is the centre for the manufacture of these unique metal
                  handicrafts which developed during the 14th cent...
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
                  Bidar is the centre for the manufacture of these unique metal
                  handicrafts which developed during the 14th cent...
                </div>
              </Card>
            </SwiperSlide>
            <Button>Explore Store</Button>
          </Swiper>
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
    </>
  );
}
