import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import ProductList from "./Product/ProductList";
import SearchBar from "./SearchBar";
import InputNumber from "./InputNumber";
// import products from "./fixtures";

// Hook créé par moi-même :
const useProducts = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [nbProducts, setNbProducts] = useState(3);
  // console.log(nbProducts);
  useEffect(() => {
    if (nbProducts > 0) {
      fetch(`https://server-ten.now.sh?nbproducts=${nbProducts}`)
        .then(body => body.json())
        .then(response => {
          // console.log(response);
          setProducts(response);
        });
    }
  }, [nbProducts]);
  const filteredProducts = products.filter(product => {
    return (
      product.title.toUpperCase().includes(search.toUpperCase()) ||
      product.content.toUpperCase().includes(search.toUpperCase())
    );
  });
  return [filteredProducts, setSearch, setNbProducts];
};

function App() {
  const [filteredProducts, setSearchText, setNbProducts] = useProducts();

  return (
    <div className="App">
      <Header />
      <SearchBar setSearch={setSearchText} />
      <InputNumber setNbProducts={setNbProducts} />
      <main className="content">
        <ProductList products={filteredProducts} />
      </main>
    </div>
  );
}

export default App;
