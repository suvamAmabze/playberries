import Axios from "axios";
import {
  USER_CONTACTUS_FAIL,
  USER_CONTACTUS_REQUEST,
  USER_CONTACTUS_SUCCESS,
  USERLIST_CONTACTUS_REQUEST,
  USERLIST_CONTACTUS_SUCCESS,
  USERLIST_CONTACTUS_FAIL,
  USERDELETE_CONTACTUS_REQUEST,
  USERDELETE_CONTACTUS_SUCCESS,
  USERDELETE_CONTACTUS_FAIL,
} from "../constants/contactusConstants";

export const contactus = (
  name,
  telephone,
  email,
  event,
  otherevent,
  message
) => async (dispatch) => {
  dispatch({
    type: USER_CONTACTUS_REQUEST,
    payload: { name, telephone, email, event, otherevent, message },
  });
  try {
    const { data } = await Axios.post("/api/contactus/contactus", {
      name,
      telephone,
      email,
      event,
      otherevent,
      message,
    });
    dispatch({ type: USER_CONTACTUS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_CONTACTUS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listContactusUsers = ({}) => async (dispatch, getState) => {
  dispatch({ type: USERLIST_CONTACTUS_REQUEST });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.get(`/api/contactus`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });

    dispatch({ type: USERLIST_CONTACTUS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USERLIST_CONTACTUS_FAIL, payload: message });
  }
};

export const deleteContactusUser = (userId) => async (dispatch, getState) => {
    dispatch({ type: USERDELETE_CONTACTUS_REQUEST, payload: userId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.delete(`/api/contactus/${userId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: USERDELETE_CONTACTUS_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: USERDELETE_CONTACTUS_FAIL, payload: message });
    }
}
