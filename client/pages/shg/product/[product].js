import Navbar from "components/Navbar";
import styles from "styles/Product.module.scss";
import { Breadcrumb, Button, message, Skeleton } from "antd";
import { AiOutlineShopping } from "react-icons/ai";
import { useQuery } from "react-query";
import { BuyProduct, GetProductDetails } from "services/product.services";
import CardComponent from "components/CardComponentSecond";
import { CreateOrder } from "services/razorpay.service";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
export default function Product({ product }) {
  const router = useRouter();
  const { isLoggedIn } = useSelector((state) => state.user);
  const { data: productDetails, isLoading } = useQuery("productdetails", () =>
    GetProductDetails(product)
  );
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (e) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const result = await CreateOrder({
      _id: product,
    });

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }
    const { order } = result;
    const { amount, id: order_id, currency } = order;

    const options = {
      key: "rzp_test_d0Oa7LSuh21z8z", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Svayam",
      description: "Test Transaction",
      image: "https://i.ibb.co/Z2FtyBn/Frame-2.png",
      order_id: order_id,
      handler: async function (response) {
        try {
          const data = {
            transaction: {
              currency: "INR",
              amount: amount,
              transactionId: response.razorpay_payment_id,
            },
            _id: product,
          };
          // @TODO Payment success returns stuff
          const result = await BuyProduct(data);
          console.log(result);
          message.success("transaction successful");
        } catch (err) {
          console.log("ERROR");
          console.log(err);
          message.error("error with transaction");
        }
      },
      prefill: {
        name: "Sitaraman",
        email: "sitaraman@gmail.com",
        contact: "9999999999",
      },
      notes: {
        address: "Some random address",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  console.log(productDetails);
  const onBuyNowClick = (e) => {
    displayRazorpay();
  };
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Breadcrumb className={styles.breadcrumb}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
        <Skeleton loading={isLoading && !productDetails}>
          {productDetails && (
            <div className={styles.colController}>
              <div className={styles.colOne}>
                {productDetails &&
                  productDetails.images.map((item, idx) => {
                    console.log(item);
                    return (
                      <CardComponent
                        key={idx}
                        name={productDetails.name}
                        image={item}
                        descrption={productDetails.description}
                        price={productDetails.sellPrice}
                        id={productDetails._id}
                      />
                    );
                  })}
              </div>
              <div className={styles.colTwo}>
                <h1>{productDetails.name}</h1>
                <h2>₹ {productDetails.sellPrice}</h2>
                <Button
                  onClick={
                    isLoggedIn ? onBuyNowClick : () => router.push("/login")
                  }
                  type="primary"
                  className={styles.button}
                >
                  Buy Now
                </Button>
                <Button type="primary" className={styles.buttonTwo}>
                  <AiOutlineShopping style={{ fontSize: "1rem" }} />
                </Button>
                <h3>DESCRIPTION</h3>
                <p>{productDetails.description}</p>
                <h3>SHIPPING POLICY</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  tellus purus, laoreet at eros eget, ultricies consequat
                  tellus. Curabitur nec sagittis nisl, eu porttitor massa. Ut
                  posuere semper luctus. Aliquam nunc ex, ornare non mattis sed,
                  scelerisque non nisl. Vivamus convallis bibendum urna eget
                  consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Etiam tellus purus, laoreet at eros eget, ultricies
                  consequat tellus. Curabitur nec sagittis nisl, eu porttitor
                  massa. Ut posuere semper luctus. Aliquam nunc ex, ornare non
                  mattis sed, scelerisque non nisl. Vivamus convallis bibendum
                  urna eget consequat. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Etiam tellus purus, laoreet at eros eget,
                  ultricies consequat tellus. Curabitur nec sagittis nisl, eu
                  porttitor massa. Ut posuere semper luctus. Aliquam nunc ex,
                  ornare non mattis sed, scelerisque non nisl. Vivamus convallis
                  bibendum urna eget consequat.{" "}
                </p>
              </div>
            </div>
          )}
        </Skeleton>

        <h3 className={styles.exploreHeading}>EXPLORE MORE</h3>
        <div className={styles.exploreSection}>
          {/* <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent /> */}
        </div>
      </div>
    </>
  );
}

Product.getInitialProps = ({ query: { product } }) => {
  return { product };
};
