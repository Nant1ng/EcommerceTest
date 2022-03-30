import React from "react";
import Head from "next/head";
import Products from "../../components/Products/Products";
import Header from "../../components/Header/Header";
import styles from "../../styles/Home.module.css";
import axios from "axios";
import { GET_ACCESSORIES_ENDPOINT } from "../../utils/constant";

function accessories({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shop Accessories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header headline={"Accessories"} back={true} />
        <Products products={products} />
      </main>
    </div>
  );
}

export default accessories;

export async function getStaticProps() {
  const { data: AccessoriesData } = await axios.get(GET_ACCESSORIES_ENDPOINT);
  const data = { products: AccessoriesData?.products };

  return {
    props: data,
  };
}
