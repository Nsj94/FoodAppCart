import React, { useState, useEffect } from "react";
import "./Home.css";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import ProductCard from "../../components/ProductCard/ProductCard";
import productData from "../../api/products.json";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
    <div className="row" style={{ height: "100vh" }}>
      <div className=" col-12 col-lg-8 col-xl-8 py-5">
        <div className="row ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="col-12 col-lg-4 col-xl-4 py-5">
        <OrderDetails />
      </div>
    </div>
  );
}
