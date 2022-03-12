import CardComponentSecondary from "../../components/CardComponentSecond";
import CardComponent from "../../components/CardComponent";
import Navbar from "../../components/Navbar";
import styles from "styles/Store.module.scss";
import { useQuery } from "react-query";
import { GetAllProducts } from "services/product.services";

export default function Store() {
  const { data, isLoading } = useQuery("get-listed-products", GetAllProducts);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Store</h1>
        <h2>Popular Product Categories</h2>
        <div className={styles.cardController}>
          {!isLoading &&
            data.products.map((item, idx) => {
              return (
                <CardComponent
                  key={idx}
                  name={item.name}
                  image={item.images[0]}
                  descrption={item.description}
                  price={item.sellPrice}
                  id={item._id}
                />
              );
            })}
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
