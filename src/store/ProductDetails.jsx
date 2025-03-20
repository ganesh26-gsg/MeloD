import { useParams } from "react-router-dom";
import { allProducts } from "../data/product";

const ProductDetails = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.product} className="product-image" />
      <h2>{product.product}</h2>
      <h3>Price: ${product.price}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
