import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import Footer from "../Footer";
import Header from "../Header";
import "../ScreenContainer.css";
import MessageBox from "../MessageBox";

export default function CartScreen(props) {
  const productID = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productID) {
      dispatch(addToCart(productID, qty));
    }
  }, [dispatch, productID, qty]);

  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    cartItems.map((item) => {
      if (item.qty === 0) {
        alert("person can not be zero");
        props.history.push("/cart");
      } else {
        props.history.push("/signin?redirect=shipping");
      }
    });
  };
  return (
    <div className="SCREEN-CONTAINER">
      <Header />

      <div className="MAIN" style={{ backgroundColor: "#f7f7f2" }}>
        <h1 className="Title">My Cart</h1>

        <div className="CartContainer" data-aos="fade-in">
          <div className="CartAllItems">
            {cartItems.length === 0 ? (
              <MessageBox>
                Cart is empty. <Link to="/foodproducts">Order Now</Link>
              </MessageBox>
            ) : (
              <div>
                {cartItems.map((item) => (
                  <div className="cart-left" key={item.product}>
                    <div className="CartItemImage">
                      <img src={item.image} alt={item.name}></img>
                    </div>

                    <div className="CartInfo">
                      <div className="CartItemName">{item.name}</div>

                      <div className="CartItemPrice">Price: ₹{item.price}</div>

                      <div className="calculation-pricePerPerson">
                        {`${item.qty} X ₹${item.price} + ₹${
                          item.additionalPrice
                        } = ₹${item.qty * item.price + item.additionalPrice}`}
                      </div>

                      <div>
                        <i className="fas fa-child"></i>:&nbsp;
                        <select
                          className="qtySelector"
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option
                              key={x + item.personCountStart}
                              value={x + item.personCountStart}
                            >
                              {x + item.personCountStart}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="CartRemoveBtn">
                        <div
                          type="button"
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          <i className="fas fa-trash"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="TotalAmount">
            <div>
              <h2>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : ₹
                {cartItems.reduce(
                  (a, c) => a + c.price * c.qty + c.additionalPrice,
                  0
                )}
              </h2>
            </div>

            <div className="TotalAmountBtn">
              <button
                type="button"
                className="primary block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed to Checkout
              </button>
              <Link to={"/foodproducts"}>
                <button>Continue Shopping</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
