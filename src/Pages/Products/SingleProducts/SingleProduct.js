import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProductDetails from "./SingleProductDetails";

const SingleProduct = () => {
  const { spId } = useParams();
  const [singleProduct, getSingleProduct] = useState([]);
  console.log(singleProduct);

  //  console.log(singleId)
  //  console.log("SingleProduct ~ spId", spId)
  useEffect(() => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${spId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => getSingleProduct(data.drinks));
  }, [spId]);

  return (
    <div>
      {singleProduct?.map((sp) => (
        <SingleProductDetails sp={sp}  />
      ))}
    </div>
  );
};

export default SingleProduct;
