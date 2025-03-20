import React from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../data/product";

const ProductPage = () => {
  const { id } = useParams(); // Get product ID from URL
  const product = allProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div>
      <h2>{product.product}</h2>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default ProductPage;
