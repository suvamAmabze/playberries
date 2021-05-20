import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import MenusScreen from "./Components/MenusScreen/MenusScreen";
import BusinessScreen from "./Components/ContactUsScreen/BusinessScreen";
import CustomerScreen from "./Components/ContactUsScreen/CustomerScreen";
import MenuScreen from "./Components/MenusScreen/MenuScreen";
import Privacy from "./Components/ForYouFooter/Privacy";
import GuidelinesForRestaurants from "./Components/ForYouFooter/GuidelinesForRestaurants";
import GalleryScreen from "./Components/GalleryScreen/GalleryScreen";
import SuperServicesScreen from "./Components/SuperServicesScreen/SuperServicesScreen";
import VegScreen from "./Components/PlansAndPricing/VegScreen";
import ItemScreen from "./Components/PlansAndPricing/ItemScreen";
import CartScreen from "./Components/CartScreen/CartScreen";
import SignInScreen from "./Components/UserAccount/SignInScreen";
import RegisterScreen from "./Components/UserAccount/RegisterScreen";
import AboutScreen from "./Components/AboutScreen/AboutScreen";
import ContactUsScreen from "./Components/UserAccount/ContactUsScreen";
import ProfileScreen from "./Components/UserAccount/ProfileScreen";
import PrivateRoute from "./Components/PrivateRoute";
import AdminRoute from "./Components/AdminRoute";
import UserListScreen from "./Components/AdminScreens/UserListScreen";
import UserEditScreen from "./Components/AdminScreens/UserEditScreen";
import SearchScreen from "./Components/SearchScreen/SearchScreen";
import UserContactusScreen from "./Components/AdminScreens/UserContactusScreen";
import GalleryListScreen from "./Components/AdminScreens/GalleryListScreen";
import GalleryProductEditScreen from "./Components/AdminScreens/GalleryProductEditScreen";
import AdminHomeScreen from "./Components/AdminScreens/AdminHomeScreen";
import ShippingAddressScreen from "./Components/CheckoutScreens/ShippingAddressScreen";
import PaymentMethodScreen from "./Components/CheckoutScreens/PaymentMethodScreen";
import PlaceOrderScreen from "./Components/CheckoutScreens/PlaceOrderScreen";
import paytmCard from "./Components/CheckoutScreens/paytmCard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/about" exact component={AboutScreen}></Route>
        <Route path="/menus" exact component={MenusScreen}></Route>
        <Route path="/menus/:id" component={MenuScreen}></Route>
        <Route path="/business" component={BusinessScreen}></Route>
        <Route path="/customer" component={CustomerScreen}></Route>
        <Route path="/privacy" component={Privacy}></Route>
        <Route
          path="/guidelines-for-restaurants"
          component={GuidelinesForRestaurants}
        ></Route>
        <Route path="/gallery" component={GalleryScreen} exact></Route>
        <Route path="/super-services" component={SuperServicesScreen}></Route>
        <Route path="/foodproducts" exact component={VegScreen}></Route>
        <Route path="/foodproducts/:id" component={ItemScreen}></Route>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/signin" component={SignInScreen}></Route>
        <Route path="/register" component={RegisterScreen}></Route>
        <Route path="/shipping" component={ShippingAddressScreen}></Route>
        <Route path="/payment" component={PaymentMethodScreen}></Route>
        <Route path="/placeorder" component={PlaceOrderScreen}></Route>
        <Route
          path="/search/name/:name?"
          component={SearchScreen}
          exact
        ></Route>
        <Route
          path="/search/category/:category"
          component={SearchScreen}
          exact
        ></Route>
        <Route
          path="/search/category/:category/name/:name"
          component={SearchScreen}
          exact
        ></Route>
        <Route
          path="/search/category/:category/name/:name/min/:min/max/:max"
          component={SearchScreen}
          exact
        ></Route>
        <Route path="/contactus" component={ContactUsScreen}></Route>
        <Route
          path="/gallery/:id/edit"
          component={GalleryProductEditScreen}
          exact
        ></Route>

        <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
        <PrivateRoute path="/order/:id" component={paytmCard}></PrivateRoute>

        <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
        <AdminRoute
          path="/user/:id/edit"
          component={UserEditScreen}
        ></AdminRoute>
        <AdminRoute
          path="/contactuslist"
          component={UserContactusScreen}
        ></AdminRoute>
        <AdminRoute
          path="/gallerylist"
          component={GalleryListScreen}
        ></AdminRoute>
        <AdminRoute path="/admin" component={AdminHomeScreen}></AdminRoute>

        <Route path="/" exact component={HomeScreen}></Route>
      </Switch>
    </div>
  );
}

export default App;
