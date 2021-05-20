import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../../actions/orderActions";
import { ORDER_CREATE_RESET } from "../../constants/orderConstants";

import Footer from "../Footer";
import Header from "../Header";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import CheckoutSteps from "./CheckoutSteps";

export default function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);

  if (!cart.paymentMethod) {
    props.history.push("/payment");
  } else if (!cart.shippingAddress.address) {
    props.history.push("/shipping");
  } else if (cart.cartItems.length === 0) {
    props.history.push("/cart");
  }

  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  const toPrice = (num) => Number(num.toFixed(2));
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price + c.additionalPrice, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.05 * cart.itemsPrice); //5% tax
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const dispatch = useDispatch();
  const placeOrderHandler = () => {
    alert("Ready to payment");
    // console.log(cart)
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
    // console.log(order)
  };

  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);
  return (
    <div className="SCREEN-CONTAINER">
      <Header />
      <div className="MAIN background-f7f7f2">
        <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
        <div className="checkout-row top">
          <div className="COcol-2">
            <ul>
              <li>
                <div className="COcard COcard-body">
                  <h2 className="checkoutMainTitle">Shipping Address</h2>
                  <hr />
                  <p className="Info-placeorderScrn">
                    <strong>Name:</strong> {cart.shippingAddress.fullName}
                    <br />
                    <strong>telephone: </strong>
                    {cart.shippingAddress.telephone}
                    <br />
                    <strong>Address: </strong> {cart.shippingAddress.address},
                    <br />
                    <strong>PIN code: </strong>
                    {cart.shippingAddress.postalCode}
                    <br />
                    <strong>City: </strong>
                    {cart.shippingAddress.city}
                    <br />
                    <strong>Country: </strong>
                    {cart.shippingAddress.country}
                    <br />
                    <strong>Restaurant: </strong>
                    {cart.shippingAddress.restaurant}
                  </p>
                </div>
              </li>
              <li>
                <div className="COcard COcard-body">
                  <h2 className="checkoutMainTitle">Payment Method</h2>
                  <hr />
                  <p className="Info-placeorderScrn">
                    <strong>Method:</strong> {cart.paymentMethod}
                  </p>
                </div>
              </li>
              <li>
                <div className="COcard COcard-body">
                  <h2 className="checkoutMainTitle">Order Items</h2>
                  <ul className="Info-placeorderScrn">
                    {cart.cartItems.map((item) => (
                      <li key={item.product}>
                        <div className="checkout-row">
                          <div>
                            <Link to={`/foodproducts/${item.product}`}>
                              <img
                                src={item.image}
                                alt={item.name}
                                className="COsmall"
                              ></img>
                            </Link>
                          </div>

                          <div>
                            <Link to={`/foodproducts/${item.product}`}>
                              <span className="font-bold">{item.name}</span>
                            </Link>
                          </div>

                          <div>
                            {item.qty} x ₹{item.price} + ₹{item.additionalPrice}
                            = ₹{item.qty * item.price + item.additionalPrice}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="COcol-1">
            <div className="COcard COcard-body">
              <ul>
                <li>
                  <h2 className="checkoutMainTitle">Order Summary</h2>
                </li>
                <li>
                  <div className="checkout-row">
                    <div>Items</div>
                    <div>₹{cart.itemsPrice.toFixed(2)}</div>
                  </div>
                </li>
                <li>
                  <div className="checkout-row">
                    <div>Shipping</div>
                    <div>₹{cart.shippingPrice.toFixed(2)}</div>
                  </div>
                </li>
                <li>
                  <div className="checkout-row">
                    <div>GST</div>
                    <div>₹{cart.taxPrice.toFixed(2)}</div>
                  </div>
                </li>
                <li>
                  <div className="checkout-row">
                    <div>
                      <strong> Order Total</strong>
                    </div>
                    <div>
                      <strong>₹{cart.totalPrice.toFixed(2)}</strong>
                    </div>
                  </div>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={placeOrderHandler}
                    className="block-width100 btn btn-primary marginTopBotton20px"
                    disabled={cart.cartItems.length === 0}
                  >
                    Place Order
                  </button>
                </li>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
