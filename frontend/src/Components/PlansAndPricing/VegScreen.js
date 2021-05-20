import React, { useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import "../ScreenContainer.css";
import "./PlansAndPricingScreen.css";
import PlanAndPricingProduct from "./PlanAndPricingProduct";
import MessageBox from "../MessageBox";
import LoadingBox from "../LoadingBox";
import { useSelector, useDispatch } from "react-redux";
import {
  listProductCategories,
  listProducts,
} from "../../actions/productActions";
import SearchBox from "../SearchBox";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default function VegScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // useEffect(() => {
  //   dispatch(listProducts({}));
  // }, []);

  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listProductCategories());
  }, [dispatch]);

  return (
    <div className="SCREEN-CONTAINER">
      <Header />

      <div className="MAIN">
        <h1 className="Title">Foods</h1>

        
          <Route
            render={({ history }) => <SearchBox history={history}></SearchBox>}
          ></Route>

          <Link to="/search/name">
          <button className="filter-btn">Filter&nbsp;<i className="fas fa-sort"></i></button>
          </Link>
          
        

        <div>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox>{error}</MessageBox>
          ) : (
            <div className="food-menu-container CenterBody">
              {products.map((item) => (
                <PlanAndPricingProduct item={item} key={item._id} />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
