import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/CartReducers";
import {
  deleteContactusUserReducer,
  listContactusUsersReducer,
  userContactusReducer,
} from "./reducers/contactusReducers";
import {
  galleryProductCreateReducer,
  galleryProductDeleteReducer,
  galleryProductDetailsReducer,
  galleryProductListReducer,
  galleryProductUpdateReducer,
} from "./reducers/galleryProductReducers";
import { orderCreateReducer } from "./reducers/orderReducers";
import {
  productCategoryListReducer,
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducers";
import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userRegisterReducer,
  userSigninReducer,
  userUpdateProfileReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
    paymentMethod: "Paytm",
  },
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userUpdate: userUpdateReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  productCategoryList: productCategoryListReducer,
  userContactus: userContactusReducer,
  contactusList: listContactusUsersReducer,
  contactusDelete: deleteContactusUserReducer,
  galleryProductList: galleryProductListReducer,
  galleryProductDetails: galleryProductDetailsReducer,
  galleryProductCreate: galleryProductCreateReducer,
  galleryProductUpdate: galleryProductUpdateReducer,
  galleryProductDelete: galleryProductDeleteReducer,
  orderCreate: orderCreateReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
