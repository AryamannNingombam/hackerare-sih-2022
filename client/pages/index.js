import Navbar from "components/Navbar";
import styles from "../styles/Home.module.scss";
import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.LeftSection}>
          Now buy and sell handcrafted items from any corner of India.
        </div>
        <div className={styles.RightSection}>
          {/* <Carousel effect="fade" autoplay autoplaySpeed={1800}>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel> */}
        </div>
      </div>
    </>
  );
}
