import React from "react";

const Product = ({ src, title, content }) => {
  return (
    <div className="product">
      <img src={src} />
      <div className="product-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Product;
