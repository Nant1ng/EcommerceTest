import React from "react";
import ProductCard from "../components/Products/ProductCard";
import { Grid } from "@mui/material";

function Products({ products }) {
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        pt={3}
        px={{ xs: 5, md: 10, lg: 25, xl: 50 }}
      >
        {products.length
          ? products.map((product) => (
              <Grid item xs={12} md={6} lg={3} xl={3} key={product?.id}>
                <ProductCard
                  slug={product?.slug}
                  name={product?.name}
                  price={product?.price}
                  regularPrice={product?.regular_price}
                  sale={product?.sale_price}
                  img={product?.images[0]?.src}
                  alt={product?.images[0]?.alt}
                />
              </Grid>
            ))
          : null}
      </Grid>
    </div>
  );
}

export default Products;
