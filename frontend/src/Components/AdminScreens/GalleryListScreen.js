import React, { useEffect } from "react";
// import Footer from "../Footer";
// import Header from "../Header";
import "../ScreenContainer.css";
import MessageBox from "../MessageBox";
import LoadingBox from "../LoadingBox";
import { useDispatch, useSelector } from "react-redux";
import {
  createGalleryProduct,
  deleteGalleryProduct,
  listGalleryProducts,
} from "../../actions/galleryProductActions";
import {
  GALLERYPRODUCT_CREATE_RESET,
  GALLERYPRODUCT_DELETE_RESET,
} from "../../constants/galleryProductConstants";
import { useState } from "react";
import HeaderAdmin from "./HeaderAdmin";
import FooterAdmin from "./FooterAdmin";

export default function GalleryListScreen(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const galleryProductList = useSelector((state) => state.galleryProductList);
  const { error, products } = galleryProductList;

  const galleryProductCreate = useSelector(
    (state) => state.galleryProductCreate
  );
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = galleryProductCreate;

  const galleryProductDelete = useSelector(
    (state) => state.galleryProductDelete
  );
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = galleryProductDelete;

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: GALLERYPRODUCT_CREATE_RESET });
      props.history.push(`/gallery/${createdProduct._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: GALLERYPRODUCT_DELETE_RESET });
    }
    dispatch(listGalleryProducts());
  }, [createdProduct, dispatch, props.history, successCreate, successDelete]);

  const deleteHandler = (product) => {
    if (window.confirm("Are you sure to delete this image?")) {
      dispatch(deleteGalleryProduct(product._id));
      window.location.reload();
    }
  };

  const createHandler = () => {
    dispatch(createGalleryProduct());
  };

  return (
    <div className="SCREEN-CONTAINER">
      {/* <Header /> */}
      <HeaderAdmin />

      <div className="MAIN">
        <h1 className="Title">Gallery List</h1>

        {loadingDelete && <LoadingBox></LoadingBox>}
        {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

        {loadingCreate && <LoadingBox></LoadingBox>}
        {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}

        <div className="searchBox">
          <input
            type="input"
            placeholder="Search data"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          ></input>

          <div className="galleryCreateImage">
            <button className="adminButton" type="button" onClick={createHandler}>
              Upload Image <i className="fas fa-plus-circle"></i>
            </button>
          </div>
        </div>

        {error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>IMAGE</th>
                <th>CATEGORY</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {products
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.image
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    val.category
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    val._id.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((product) => (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>{product.image}</td>
                    <td>{product.category}</td>
                    <td>
                      <button
                      className="adminButton"
                        type="button"
                        onClick={() =>
                          props.history.push(`/gallery/${product._id}/edit`)
                        }
                      >
                        Edit <i className="fas fa-edit"></i>
                      </button>
                      <button
                      className="adminButton"
                        type="button"
                        onClick={() => deleteHandler(product)}
                      >
                        Delete <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
      {/* <Footer /> */}
      <FooterAdmin />
    </div>
  );
}
