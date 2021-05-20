import React from "react";
import "../ScreenContainer.css";
import data from "../../data";
import Footer from "../Footer";
import Header from "../Header";
import { Image, Card, Button } from "react-bootstrap";

export default function MenuScreen(props) {
  const product = data.AllMenus.find(
    (obj) => obj._id === props.match.params.id
  );

  function onFormSubmit(e) {
    e.preventDefault();
    props.history.push("/foodproducts");
  }

  if (!product) {
    return <div>Product Not Found</div>;
    //break
  }
  //else
  return (
    <div className="SCREEN-CONTAINER">
      <Header />

      <div className="MAIN" style={{ backgroundColor: "#f7f7f2" }}>
        <div className="MenuDetailContainer">
          <Image src={product.image} className="MenuImage" />
          <h3 className="MenuName">{product.name}</h3>
        </div>

        <div className="CenterBody">
          <div>
            <div className="MenuInfo">
              <h4 className="MenuInfo-title">About {product.name} Menu</h4>
              <p>{product.description}</p>
            </div>
          </div>

          <div className="MenuBook">
            <Card style={{ width: "18rem" }} className="shadow">
              <Card.Body>
                {/* <Card.Title>₹4999/day</Card.Title> */}
                <hr />
                <Card.Subtitle className="mb-2 text-muted">
                  Book Now
                </Card.Subtitle>
                {/* <Card.Text> */}
                <form action="" method="" onSubmit={onFormSubmit}>
                  {/* <div className="MenuBookForm">
                    <input
                      type="text"
                      id="depart"
                      placeholder="Move In"
                    ></input>
                    <i className="fas fa-exchange-alt"></i>
                    <input
                      type="text"
                      id="return"
                      placeholder="Move Out"
                    ></input>
                  </div> */}

                  <Button
                    type="submit"
                    value="search"
                    variant="primary"
                    className="MenuBook-btn"
                  >
                    Select Foods
                  </Button>
                </form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
