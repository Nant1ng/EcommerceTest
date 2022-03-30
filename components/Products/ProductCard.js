import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Button,
} from "@mui/material";

function ProductCard({ slug, name, price, regularPrice, sale, img, alt }) {
  let strValue = sale;
  if (strValue !== null && strValue !== "") {
    strValue = true;
  }

  const router = useRouter();

  const singelProduct = (slug, e) => {
    e.stopPropagation();
    router.push(`/product/${slug}`);
  };

  return (
    <Card sx={{ minHeight: 400 }}>
      <CardMedia component="img" alt={alt} height="274" width="280" src={img} />
      <CardContent>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        {strValue ? (
          <Stack direction="row" spacing={1}>
            <Typography
              variant="subtitle2"
              sx={{ textDecoration: "line-through" }}
            >
              ${regularPrice}
            </Typography>
            <Typography variant="subtitle2">${sale}</Typography>
          </Stack>
        ) : (
          <Typography variant="subtitle2">${price}</Typography>
        )}
      </CardContent>
      <Button onClick={(e) => singelProduct(slug, e)}>PLZ</Button>
    </Card>
  );
}

export default ProductCard;
