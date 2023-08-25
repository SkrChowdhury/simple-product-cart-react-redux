import React from "react";
import CartItem from "./CartItem";
import Billing from "./Billing";
import { useSelector } from "react-redux";

const MyCart = () => {
  const carts = useSelector((state) => state.carts);
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {carts.length ? (
              carts.map((p) => <CartItem product={p} key={p.id} />)
            ) : (
              <div>No Product In Your Cart !!!!!!!!!!</div>
            )}
          </div>
          <Billing />
        </div>
      </div>
    </main>
  );
};

export default MyCart;
