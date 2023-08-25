import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./../redux/carts/actions";
import { removeQuantity } from "./../redux/products/actions";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { id, imgUrl, name, category, price, quantity } = product;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(removeQuantity(id));
  };

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={`${imgUrl}`} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{name}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          disabled={quantity === 0}
          className="lws-btnAddToCart"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
