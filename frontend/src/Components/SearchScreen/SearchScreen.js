import React, { useEffect } from "react";
import "../ScreenContainer.css";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import Header from "../Header";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { listProducts } from "../../actions/productActions";
import PlanAndPricingProduct from "../PlansAndPricing/PlanAndPricingProduct";
import SearchBox from "../SearchBox";
import { Route } from "react-router-dom";
import { prices } from "../../utils";

export default function SearchScreen(props) {
  const { name = "all", category = "all", min = 0, max = 0 } = useParams();

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;

  useEffect(() => {
    dispatch(
      listProducts({
        name: name !== "all" ? name : "",
        category: category !== "all" ? category : "",
        min,
        max,
      })
    );
  }, [category, dispatch, max, min, name]);

  const getFilterUrl = (filter) => {
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
    return `/search/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}`;
  };

  return (
    <div className="SCREEN-CONTAINER">
      <Header />
      <div className="MAIN backgroundColor-f7f7f2">
        <h1 className="Title">My Choice Foods</h1>
        <Route
          render={({ history }) => <SearchBox history={history}></SearchBox>}
        ></Route>

        <div>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div className="SearchScreenResultCounts">
              {products.length} Results found
            </div>
          )}
        </div>

        <div className="SearchScreenContainer">
          <div className="SearchScreenContainer-left">
            <div>
              <h3 className="SearchScreen-title">Categoey</h3>
              {loadingCategories ? (
                <LoadingBox></LoadingBox>
              ) : errorCategories ? (
                <MessageBox variant="danger">{errorCategories}</MessageBox>
              ) : (
                <ul>
                  <Link
                    className={"all" === category ? "active" : ""}
                    to={getFilterUrl({ category: "all" })}
                  >
                    <li className="SearchScreen-li"> All </li>
                  </Link>

                  {categories.map((c) => (
                    <Link
                      key={c}
                      className={c === category ? "active" : ""}
                      to={getFilterUrl({ category: c })}
                    >
                      <li key={c} className="SearchScreen-li">
                        <i className="fas fa-utensils color-b78c33"></i>
                        &nbsp;&nbsp;{c}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <h3 className="SearchScreen-title">Food price</h3>
              <ul>
                <div className="SearchScreen-ul">
                  {prices.map((p) => (
                    <li key={p.name} style={{ padding: "5px" }}>
                      <Link
                        to={getFilterUrl({ min: p.min, max: p.max })}
                        className={
                          `${p.min}-${p.max}` === `${min}-${max}`
                            ? "active"
                            : ""
                        }
                      >
                        <span className="SearchScreen-price">{p.name}</span>
                      </Link>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          </div>

          <div className="SearchScreenContainer-right">
            {loading ? (
              <LoadingBox></LoadingBox>
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <>
                {products.length === 0 && (
                  <MessageBox>No Product Found</MessageBox>
                )}
                <div className="food-menu-container CenterBody">
                  {products.map((item) => (
                    <PlanAndPricingProduct item={item} key={item._id} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
