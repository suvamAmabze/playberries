import React from "react";

export default function CheckoutSteps(props) {
  return (
    <div className="checkout-row checkout-steps">
      <div className={props.step1 ? "active" : ""}>
        <b className="checkout-stepsTitle">SignIn</b>
      </div>
      <div className={props.step2 ? "active" : ""}>
        <b className="checkout-stepsTitle">Shipping</b>
      </div>
      <div className={props.step3 ? "active" : ""}>
        <b className="checkout-stepsTitle">Payment</b>
      </div>
      <div className={props.step4 ? "active" : ""}>
        <b className="checkout-stepsTitle">Order</b>
      </div>
    </div>
  );
}
