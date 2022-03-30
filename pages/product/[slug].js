import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Paper } from "@mui/material"

function product({ req, res }) {
  // get the slug from the url
  const router = useRouter();
  const _slug = router.query.slug;

  // get the product data from the API
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (!_slug) {
      console.log("no slug");
      return;
    } else {
      axios
        .get(`/api/getSingelProduct?slug=${_slug}`)
        .then((res) => {
          setProduct(res.data.products[0]);
          console.log(res.data.products[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [_slug]);

  return (
    <div>
      <h1>Hello</h1>
      <h1>{product.name}</h1>
      {product.short_description}
    </div>
  );
}

export default product;
