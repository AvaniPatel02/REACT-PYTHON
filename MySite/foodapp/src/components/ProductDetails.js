import React from "react";
import { useLocation } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { state: product } = useLocation();

  return (
    <div className="product-details ">
      <div className="product-details-header">
        <div className="image-container">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </div>

        <div className="details-container">
          <h1>{product.name}</h1>
          <p><strong>Price:</strong> {product.price}</p>
          <p><strong>Ingredients:</strong> {product.ingredients || "Not specified"}</p>
          <p><strong>Weight/Quantity:</strong> {product.weight || "Not specified"}</p>
          <p><strong>Manufacturer:</strong> {product.manufacturer || "Not specified"}</p>
          <p><strong>Key Features:</strong> {product.keyFeatures || "Not specified"}</p>
          <strong>Customer Reviews:</strong>
          <p>"Amazing quality and taste!"</p>
          <p>"Would definitely buy again."</p>
          <p>⭐⭐⭐⭐☆</p>

          <button className="buy-now-button">BUY NOW</button>
          <button className="add-to-cart">ADD TO CART</button>
        </div>
      </div>

      <div className="product-long-description">
        <strong>Product Details</strong>
        <p>{product.longDescription}</p>
      </div>
    </div>
  );
};

export default ProductDetails;

