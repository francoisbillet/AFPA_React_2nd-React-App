import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <Product
            src={product.img}
            title={product.title}
            content={product.description}
          />
        </li>
      ))}
    </ul>
  );
};
export default ProductList;
