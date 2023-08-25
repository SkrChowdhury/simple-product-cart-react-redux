import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/carts/actions";
import { addQuantity, removeQuantity } from "../redux/products/actions";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, imgUrl, quantity, category, price, productId } = product;

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
    dispatch(addQuantity(productId, quantity));
  };

  if (quantity === 0) {
    handleRemoveFromCart();
  }

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(id));
    dispatch(removeQuantity(productId));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(id));
    dispatch(addQuantity(productId, 1));
  };
  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        <img className="lws-cartImage" src={imgUrl} alt="product" />
        <div className="space-y-2">
          <h4 className="lws-cartName">{name}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        <div className="flex items-center space-x-4">
          <button
            className="lws-incrementQuantity"
            onClick={handleIncreaseQuantity}
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{quantity}</span>
          <button
            className="lws-decrementQuantity"
            onClick={handleDecreaseQuantity}
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{price * quantity}</span>
        </p>
      </div>
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button className="lws-removeFromCart" onClick={handleRemoveFromCart}>
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
