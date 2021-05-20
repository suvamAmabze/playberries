import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Footer";
import Header from "../Header";
import "../ScreenContainer.css";
import "./ItemScreen.css";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import { detailsProduct } from "../../actions/productActions";

export default function ItemScreen(props) {
  const [qty, setQty] = useState(0);

  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${product._id}?qty=${qty}`);
  };

  return (
    <div className="SCREEN-CONTAINER">
      <Header />

      <div className="MAIN">
        <div>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox>{error}</MessageBox>
          ) : (
            <div className="ItemScreenContainer" data-aos="fade-in">
              <img className="ItemScreenImage" src={product.image}></img>

              <div className="ItemScreenInfo">
                <h4 className="font-bold colorb78c33">{product.name}</h4>
                <p className="font-bold">Price: ₹{product.price}</p>
                <span>{product.ItemsInPrice}</span>
                <hr />
                <p className="font-bold">
                  Additional Price: ₹{product.additionalPrice}
                </p>
                <span>{product.ItemsInadditionalPrice}</span>
              </div>
              <div className="AddCartCard">
                <span className="CartBigIncon">
                  <i className="fas fa-cart-plus"></i>
                </span>

                <div>
                  status:&nbsp;
                  {product.countInStock > 0 ? (
                    <span className="success">Available</span>
                  ) : (
                    <span className="danger">Unavailable</span>
                  )}
                </div>
                <div className="calculation-pricePerPerson">
                  {`${qty} X ₹${product.price} + ₹${
                    product.additionalPrice
                  } = ₹${qty * product.price + product.additionalPrice}`}
                </div>
                {product.countInStock > 0 && (
                  <>
                    <div>
                      <div>
                        <i className="fas fa-child"></i>:&nbsp;
                        <select
                          className="qtySelector"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option
                              key={x + product.personCountStart}
                              value={x + product.personCountStart}
                            >
                              {x + product.personCountStart}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {qty !== 0 ? (
                      <div className="MenuBtnContainer">
                        <button
                          onClick={addToCartHandler}
                          className="MenuBtn"
                          disabled={qty == 0}
                          style={
                            qty == 0
                              ? { cursor: "not-allowed" }
                              : { cursor: "pointer" }
                          }
                        >
                          Add To Cart
                        </button>
                      </div>
                    ) : (
                      <h6 className="danger"><i className="fas fa-child"></i>&nbsp;quantity can not be zero</h6>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
