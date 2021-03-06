import CardComponentSecondary from "components/CardComponentSecond";
import CardComponent from "components/CardComponent";
import Navbar from "components/Navbar";
import styles from "styles/Store.module.scss";
import { useQuery } from "react-query";
import { GetAllProducts } from "services/product.services";
import { GetAllSIH } from "services/sih.services";

export default function Store() {
  const { data, isLoading } = useQuery("get-listed-products", GetAllProducts);
  const { data: dataSIH, isLoading: isLoadingSIH } = useQuery(
    "get-listed-shg",
    GetAllSIH
  );

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
                  description={item.description}
                  price={item.sellPrice}
                  id={item._id}
                />
              );
            })}
        </div>
        <h2>Popular Self Help Groups</h2>
        <div className={styles.cardController}>
          {!isLoadingSIH &&
            dataSIH.sihs.map((item, idx) => {
              return (
                <CardComponentSecondary
                  key={idx}
                  name={item.name}
                  image={item.images[0]}
                  state={item.state}
                  id={item._id}
                  description={item.description}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
