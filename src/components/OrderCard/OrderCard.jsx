import React, { useContext, useState } from "react";
import "./OrderDetails.css";
import { CartValueContext } from "../ContextProvider";

function OrderCard({ product }) {
  const { cart, setCart } = useContext(CartValueContext);

  const removeFromCart = (product) =>
    setCart(cart.filter((x) => x.id !== product.id));

  const updateQuantity = (value, id) => {
    if (value == "inc") {
      const selectedProduct = cart.map((x) =>
        x.id === id ? { ...x, quantity: x.quantity + 1 } : x
      );
      setCart(selectedProduct);
    }
    if (value == "dec") {
      const selectedProduct = cart.map((x) =>
        x.id === id
          ? { ...x, quantity: x.quantity > 1 ? x.quantity - 1 : x.quantity }
          : x
      );
      setCart(selectedProduct);
    }
  };

  return (
    <div className="ordercard">
      <div className="ordercard__image">
        <img src={product.image} className="img-fluid img-responsive" alt="" />
      </div>
      <p className="ordercard__desc">
        {product.name} <br />
        <span>{product.portion} g</span>
      </p>
      <div className="ordercard__quantity">
        <i
          className="fa-solid fa-minus"
          onClick={() => updateQuantity("dec", product.id)}
        ></i>
        <span>{product.quantity}</span>
        <i
          className="fa-solid fa-plus"
          onClick={() => updateQuantity("inc", product.id)}
        ></i>
      </div>
      <div className="ordercard__price">
        $ {product.price * product.quantity}
      </div>
      <div className="ordercard__remove">
        <i
          className="fa-solid fa-xmark"
          onClick={() => removeFromCart(product)}
        ></i>
      </div>
    </div>
  );
}

export default OrderCard;
