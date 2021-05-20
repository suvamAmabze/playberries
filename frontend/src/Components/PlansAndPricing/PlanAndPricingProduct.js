import React from "react";
import { Link } from "react-router-dom";

export default function PlanAndPricingProduct(props) {
  const { item } = props;

  return (
    <div className="food-menu-item" key={item._id} data-aos="fade-in">
      <div>
        <img src={item.image}></img>
      </div>
      <h2 className="food-title">{item.name}</h2>
      <div className="food-price">Price: ₹{item.price} + ₹{item.additionalPrice}</div>

      <div>
        {/* <div className="food-items">
          <p>
            <i className="fas fa-utensil-spoon spoonPointer"></i> Green Rice
          </p>
          <p>
            <i className="fas fa-utensil-spoon spoonPointer"></i> Chicken Masala
          </p>
          <p>
            <i className="fas fa-utensil-spoon spoonPointer"></i> Roti/4
          </p>
          <p>
            <i className="fas fa-utensil-spoon spoonPointer"></i> Mix veg
          </p>
          <p>
            <i className="fas fa-utensil-spoon spoonPointer"></i> Paneer Chilli
          </p>
          <p>
            <i className="fas fa-utensil-spoon spoonPointer"></i> Gulab jamun
          </p>
        </div> */}
        <div className="item-buy MenuBtnContainer">
          <Link to={`/foodproducts/${item._id}`}>
            <button className="MenuBtn">Buy</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
