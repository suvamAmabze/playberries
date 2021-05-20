import {
  GALLERYPRODUCT_CREATE_FAIL,
  GALLERYPRODUCT_CREATE_SUCCESS,
  GALLERYPRODUCT_LIST_FAIL,
  GALLERYPRODUCT_LIST_SUCCESS,
  GALLERYPRODUCT_CREATE_RESET,
  GALLERYPRODUCT_DETAILS_REQUEST,
  GALLERYPRODUCT_DETAILS_SUCCESS,
  GALLERYPRODUCT_DETAILS_FAIL,
  GALLERYPRODUCT_CREATE_REQUEST,
  GALLERYPRODUCT_LIST_REQUEST,
  GALLERYPRODUCT_UPDATE_REQUEST,
  GALLERYPRODUCT_UPDATE_SUCCESS,
  GALLERYPRODUCT_UPDATE_FAIL,
  GALLERYPRODUCT_UPDATE_RESET,
  GALLERYPRODUCT_DELETE_REQUEST,
  GALLERYPRODUCT_DELETE_SUCCESS,
  GALLERYPRODUCT_DELETE_FAIL,
  GALLERYPRODUCT_DELETE_RESET,
} from "../constants/galleryProductConstants";

export const galleryProductListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GALLERYPRODUCT_LIST_SUCCESS:
      return { products: action.payload };
    case GALLERYPRODUCT_LIST_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const galleryProductDetailsReducer = (
  state = { loading: true },
  action
) => {
  switch (action.type) {
    case GALLERYPRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case GALLERYPRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case GALLERYPRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const galleryProductCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case GALLERYPRODUCT_CREATE_REQUEST:
      return { loading: true };
    case GALLERYPRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case GALLERYPRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case GALLERYPRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const galleryProductUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case GALLERYPRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case GALLERYPRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case GALLERYPRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case GALLERYPRODUCT_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const galleryProductDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case GALLERYPRODUCT_DELETE_REQUEST:
      return { loading: true };
    case GALLERYPRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case GALLERYPRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case  GALLERYPRODUCT_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
