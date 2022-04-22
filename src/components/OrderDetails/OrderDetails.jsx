import React, { useContext, useEffect, useState } from "react";
import OrderCard from "../OrderCard/OrderCard";
import { CartValueContext } from "../ContextProvider";
import { Link } from "react-router-dom";

function OrderDetails() {
  const { cart } = useContext(CartValueContext);

  const [totalAmount, settotalAmount] = useState(0);

  useEffect(() => {
    let totalSum = 0;
    cart.map((x) => (totalSum = totalSum + x.price * x.quantity));
    settotalAmount(totalSum);
    console.log(totalAmount);
  }, [cart]);

  return (
    <div className="orderDetails ">
      <h2> My Order</h2>
      <hr className="my-5" />

      {cart.length === 0 ? (
        <h6>Add Some items To Cart</h6>
      ) : (
        cart?.map((x) => <OrderCard key={x.id} product={x} />)
      )}

      <hr className="mt-5" />
      <h6 className="d-flex justify-content-between">
        Total : <span className="d-inline-block">$ {totalAmount}</span>
      </h6>

      <Link
        to="/cart"
        className="btn btn-primary rounded-pill w-100 my-3 d-block "
        style={{
          color: "white",
          backgroundColor: "#48D893",
          borderColor: "#48D893",
        }}
      >
        Proceed To checkout
      </Link>
    </div>
  );
}

export default OrderDetails;
