import CardComponentSecondary from "../../components/CardComponentSecond";
import CardComponent from "../../components/CardComponent";
import Navbar from "../../components/Navbar";
import styles from "styles/Store.module.scss";

export default function Store() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Store</h1>
        <h2>Popular Product Categories</h2>
        <div className={styles.cardController}>
          {/* <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent /> */}
        </div>
        <h2>Popular Self Help Groups</h2>
        <div className={styles.cardController}>
          <CardComponentSecondary />
          <CardComponentSecondary />
          <CardComponentSecondary />
          <CardComponentSecondary />
          <CardComponentSecondary />
          <CardComponentSecondary />
          <CardComponentSecondary />
          <CardComponentSecondary />
        </div>
      </div>
    </>
  );
}
