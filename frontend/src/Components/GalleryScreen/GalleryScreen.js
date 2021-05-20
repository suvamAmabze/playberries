import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import "../ScreenContainer.css";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listGalleryProducts } from "../../actions/galleryProductActions";
import { useEffect } from "react";
import MessageBox from "../MessageBox";

export default function GalleryScreen() {
  const dispatch = useDispatch();
  const galleryProductList = useSelector((state) => state.galleryProductList);
  const {error, products } = galleryProductList;

  useEffect(() => {
    dispatch(listGalleryProducts({}));
  }, [dispatch]);

  return (
    <div className="SCREEN-CONTAINER">
      <Header />

      <div className="MAIN">
        <h1 className="Title">Gallery</h1>

        <div>
          { error ? (
            <MessageBox>{error}</MessageBox>
          ) : (
            <div className="CenterBody Margin-Top-bottom-40px">
              <Container fluid style={{ textAlign: "center" }}>
                <Row noGutters className="gallerys">
                  {products.map((img) => (
                    <Col xs={12} md={4} key={img._id} data-aos="fade-up">
                      <a href={img.image} target="_blank">
                        <img className="GalleryImage" src={img.image}></img>
                      </a>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
