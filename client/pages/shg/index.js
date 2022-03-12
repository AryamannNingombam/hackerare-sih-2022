import Navbar from "components/Navbar";
import React from "react";
import styles from "styles/Shg.module.scss";
import CardComponentSecondary from "components/CardComponentSecond";
import { useQuery } from "react-query";
import { GetAllSIH } from "services/sih.services";


export default function index() {
  const { data:dataSIH, isLoading:isLoadingSIH} = useQuery("get-listed-shg", GetAllSIH);

  return (
    <>
      <Navbar />
      <h1 className={styles.shg}>SHGs</h1>
      <h2 className={styles.shgHeading}>Popular Self Help Groups</h2>
      <div className={styles.cardController}>
        {!isLoadingSIH &&
          dataSIH.sihs.map((item, idx) => {
            return (
              <CardComponentSecondary
                key={idx}
                name={item.name}
                // image={item.image}
                state={item.state}
                id={item._id}
              />
            );
          })}
      </div>
    </>
  );
}
