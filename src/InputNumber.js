import React from "react";

const InputNumber = ({ setNbProducts }) => {
  //   console.log(nbProducts);
  return (
    <input
      type="number"
      id="nbproducts"
      name="nbproducts"
      onChange={event => {
        setNbProducts(event.target.value);
      }}
    />
  );
};

export default InputNumber;
