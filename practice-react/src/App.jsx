
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import products from "./data/products";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category;

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <Navbar />

      <h1>Welcome to Cloth Shop</h1>
      <p>Find your perfect style</p>
      <h2>Products</h2>

      <input
        type="text"
        placeholder="Search clothes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {["All", "Shirts", "Trousers", "Jackets"].map((item) => (
          <button key={item} onClick={() => setCategory(item)}>
            {item}
          </button>
        ))}
      </div>

      <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
