import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Paper, Typography, Stack } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

function product() {
  // slug from url
  const router = useRouter();
  const _slug = router.query.slug;

  const [product, setProduct] = useState({});
  const [image, setImage] = useState({});

  useEffect(() => {
    if (!_slug) {
      return;
    } else {
      axios
        .get(`/api/getSingelProduct?slug=${_slug}`)
        .then((res) => {
          setProduct(res.data.products[0]);
          setImage(res.data.product[0].images[0].src);
          console.log(res.data.products[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [_slug]);

  let strValue = product.sale_price;
  if (strValue !== null && strValue !== "") {
    strValue = true;
  }

  /* 
    idk why it wont get the src from images...
    product.images[0].src = undefind
  console.log(product.images[0].src) 
  console.log(image); 
  */

  return (
    <div>
      {/* <Paper sx={{ height: 180, backgroundImage: `src(${image})` }} /> */}
      <Paper sx={{ height: 180 }} />
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {product?.name}
      </Typography>
      {product?.short_description}
      {strValue ? (
        <Stack direction="row" spacing={1}>
          <Typography
            variant="subtitle2"
            sx={{ textDecoration: "line-through" }}
          >
            {product?.regularPrice}
          </Typography>
          <Typography variant="subtitle2">${product?.sale}</Typography>
        </Stack>
      ) : (
        <Typography variant="subtitle2">${product?.price}</Typography>
      )}
    </div>
  );
}

export default product;
