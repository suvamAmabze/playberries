import React, { useEffect, useState } from "react";
//import Footer from "../Footer";
// import Header from "../Header";
import "../ScreenContainer.css";
import MessageBox from "../MessageBox";
import LoadingBox from "../LoadingBox";
import { useDispatch, useSelector } from "react-redux";
import {
  detailsGalleryProduct,
  updateGalleryProduct,
} from "../../actions/galleryProductActions";
import { GALLERYPRODUCT_UPDATE_RESET } from "../../constants/galleryProductConstants";
import axios from "../../../node_modules/axios/index";
import HeaderAdmin from "./HeaderAdmin";
import FooterAdmin from "./FooterAdmin";

export default function GalleryProductEditScreen(props) {
  const productId = props.match.params.id;

  const galleryProductDetails = useSelector(
    (state) => state.galleryProductDetails
  );
  const { loading, error, product } = galleryProductDetails;

  const galleryProductUpdate = useSelector(
    (state) => state.galleryProductUpdate
  );
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = galleryProductUpdate;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push("/gallerylist");
    }
    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: GALLERYPRODUCT_UPDATE_RESET });
      dispatch(detailsGalleryProduct(productId));
    } else {
      setName(product.name);
      setImage(product.image);
      setCategory(product.category);
    }
  }, [product, dispatch, productId, successUpdate, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateGalleryProduct({ _id: productId, name, image, category }));
  };


  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post("/api/uploads", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  return (
    <div className="SCREEN-CONTAINER">
      {/* <Header /> */}
      <HeaderAdmin />

      <div className="MAIN">
        <h1 className="Title">Edit Gallery product</h1>

        <div style={{ textAlign: "center", color: "blue", paddingTop: "20px" }}>
          <h6>Gallery ID -: {productId}</h6>
        </div>

        <form className="UserAccountform" onSubmit={submitHandler}>
          {loadingUpdate && <LoadingBox></LoadingBox>}
          {errorUpdate && (
            <MessageBox variant="danger">{errorUpdate}</MessageBox>
          )}

          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  className="UserAccountform-input"
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>

              <div>
                <label htmlFor="image">Image</label>
                <input
                  id="image"
                  className="UserAccountform-input"
                  type="text"
                  placeholder="Enter image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                ></input>
              </div>

              <div>
                <label htmlFor="imageFile">Image File</label>
                <input
                  type="file"
                  id="imageFile"
                  className="UserAccountform-input"
                  label="Choose Image"
                  onChange={uploadFileHandler}
                ></input>
                {loadingUpload && <LoadingBox></LoadingBox>}
                {errorUpload && (
                  <MessageBox variant="danger">{errorUpload}</MessageBox>
                )}
              </div>

              <div>
                <label htmlFor="category">Category</label>
                <input
                  id="category"
                  className="UserAccountform-input"
                  type="text"
                  placeholder="Enter category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                ></input>
              </div>

              <div>
                <button className="adminButton" type="submit">
                Published
                </button>
              </div>
            </>
          )}
        </form>
      </div>

      {/* <Footer /> */}
      <FooterAdmin />
    </div>
  );
}
