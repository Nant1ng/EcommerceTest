import React from "react";
import Head from "next/head";
import Link from "next/link";
import Products from "../../components/Products/Products";
import Header from "../../components/Header/Header";
import styles from "../../styles/Home.module.css";
import axios from "axios";
import { GET_WOMEN_PRODUCT_ENDPOINT } from "../../utils/constant";
import { Stack, Button, Typography } from "@mui/material";

function women({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shop Women</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header headline={"Women"} back={true}/>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Link href="/accessories">
            <Button size="small" sx={{ color: "black", textTransform: "none" }}>
              <Typography variant="subtitle1">Hoodies</Typography>
            </Button>
          </Link>
          <Link href="/men">
            <Button size="small" sx={{ color: "black", textTransform: "none" }}>
              <Typography variant="subtitle1">Shirts</Typography>
            </Button>
          </Link>
        </Stack>
        <Products products={products} />
      </main>
    </div>
  );
}

export default women;

export async function getStaticProps() {
  const { data: womenProductsData } = await axios.get(
    GET_WOMEN_PRODUCT_ENDPOINT
  );
  const data = { products: womenProductsData?.products };

  return {
    props: data,
  };
}
