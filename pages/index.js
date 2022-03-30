import React from "react";
import Head from "next/head";
import Link from "next/link";
import Products from "./Products";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { GET_PRODUCT_ENDPOINT } from "../utils/constant";
import { Stack, Button, Typography } from "@mui/material";

export default function Home({ products }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Acrowd Interview Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header headline={"Shop"} back={false}/>
        <Stack direction="row" spacing={2}>
          <Link href="/accessories">
            <Button size="small" sx={{ color: "black", textTransform: "none" }}>
              <Typography variant="subtitle1">Accessories</Typography>
            </Button>
          </Link>
          <Link href="/men">
            <Button size="small" sx={{ color: "black", textTransform: "none" }}>
              <Typography variant="subtitle1">Men</Typography>
            </Button>
          </Link>
          <Link href="/women">
            <Button size="small" sx={{ color: "black", textTransform: "none" }}>
              <Typography variant="subtitle1">Women</Typography>
            </Button>
          </Link>
        </Stack>
        <Products products={products} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const { data: productsData } = await axios.get(GET_PRODUCT_ENDPOINT);
  const data = { products: productsData?.products };

  return {
    props: data,
  };
}
