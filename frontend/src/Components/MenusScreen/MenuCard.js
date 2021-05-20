import React from "react";
import { Card } from "react-bootstrap";

export default function MenuCard(props) {
  return (
    <>
      <Card key={props.menu._id} className="CardContainer shadow" data-aos="fade-up">
        <div className="CardImage">
          <img
            src={props.menu.image}
            className="card-img-top"
            alt={props.menu.name}
          />
        </div>

        <Card.Body className="CardBody">
          <Card.Title className="CardTitle">{props.menu.name}</Card.Title>

          {/* <Card.Text>{menu.description}</Card.Text> */}
          <div className="MenuBtnContainer">
            <a href={`/menus/${props.menu._id}`}>
              <button className="MenuBtn">Details</button>
            </a>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
