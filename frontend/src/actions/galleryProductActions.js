import Axios from "axios";
import {
  GALLERYPRODUCT_CREATE_FAIL,
  GALLERYPRODUCT_CREATE_REQUEST,
  GALLERYPRODUCT_CREATE_SUCCESS,
  GALLERYPRODUCT_DELETE_FAIL,
  GALLERYPRODUCT_DELETE_REQUEST,
  GALLERYPRODUCT_DELETE_SUCCESS,
  GALLERYPRODUCT_DETAILS_FAIL,
  GALLERYPRODUCT_DETAILS_REQUEST,
  GALLERYPRODUCT_DETAILS_SUCCESS,
  GALLERYPRODUCT_LIST_FAIL,
  GALLERYPRODUCT_LIST_REQUEST,
  GALLERYPRODUCT_LIST_SUCCESS,
  GALLERYPRODUCT_UPDATE_FAIL,
  GALLERYPRODUCT_UPDATE_REQUEST,
  GALLERYPRODUCT_UPDATE_SUCCESS,
} from "../constants/galleryProductConstants";

export const listGalleryProducts = () => async (dispatch) => {
  dispatch({
    type: GALLERYPRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/gallery`);
    dispatch({ type: GALLERYPRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GALLERYPRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const detailsGalleryProduct = (productId) => async (dispatch) => {
  dispatch({ type: GALLERYPRODUCT_DETAILS_REQUEST, payload: productId });
  try {
    const { data } = await Axios.get(`/api/gallery/${productId}`);
    dispatch({ type: GALLERYPRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GALLERYPRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createGalleryProduct = () => async (dispatch, getState) => {
  dispatch({ type: GALLERYPRODUCT_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      "/api/gallery",
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: GALLERYPRODUCT_CREATE_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GALLERYPRODUCT_CREATE_FAIL, payload: message });
  }
};

export const updateGalleryProduct = (product) => async (dispatch, getState) => {
  dispatch({ type: GALLERYPRODUCT_UPDATE_REQUEST, payload: product });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/gallery/${product._id}`, product, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: GALLERYPRODUCT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GALLERYPRODUCT_UPDATE_FAIL, error: message });
  }
};

export const deleteGalleryProduct = (productId) => async (dispatch, getState) => {
  dispatch({ type: GALLERYPRODUCT_DELETE_REQUEST, payload: productId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`/api/gallery/${productId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: GALLERYPRODUCT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GALLERYPRODUCT_DELETE_FAIL, payload: message });
  }
};
