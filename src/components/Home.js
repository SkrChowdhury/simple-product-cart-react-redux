import React, { useEffect } from "react";
import AddProduct from "./AddProduct";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const Home = () => {
  const products = useSelector((state) => state.products);
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
      <main className="py-16">
        <div className="productWrapper">
          <div className="productContainer" id="lws-productContainer">
            {products.length ? (
              products.map((p, i) => <ProductItem product={p} key={i} />)
            ) : (
              <div>No Product Found</div>
            )}
          </div>
          <div>
            <AddProduct />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
