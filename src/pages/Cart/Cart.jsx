import React from "react";
import OrderDetails from "../../components/OrderDetails/OrderDetails";

export default function Cart() {
  return (
    <div
      className="row d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="col-10 col-md-6">
        <OrderDetails />
      </div>
    </div>
  );
}
