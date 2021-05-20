import {
  USERDELETE_CONTACTUS_FAIL,
  USERDELETE_CONTACTUS_REQUEST,
  USERDELETE_CONTACTUS_RESET,
  USERDELETE_CONTACTUS_SUCCESS,
  USERLIST_CONTACTUS_FAIL,
  USERLIST_CONTACTUS_REQUEST,
  USERLIST_CONTACTUS_SUCCESS,
  USER_CONTACTUS_FAIL,
  USER_CONTACTUS_REQUEST,
  USER_CONTACTUS_SUCCESS,
} from "../constants/contactusConstants";

export const userContactusReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CONTACTUS_REQUEST:
      return { loading: true };
    case USER_CONTACTUS_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_CONTACTUS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listContactusUsersReducer = (
  state = { loading: true },
  action
) => {
  switch (action.type) {
    case USERLIST_CONTACTUS_REQUEST:
      return { loading: true };
    case USERLIST_CONTACTUS_SUCCESS:
      return { loading: false, users: action.payload };
    case USERLIST_CONTACTUS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteContactusUserReducer = (state = {}, action) => {
  switch (action.type) {
    case USERDELETE_CONTACTUS_REQUEST:
      return { loading: true };
    case USERDELETE_CONTACTUS_SUCCESS:
      return { loading: false, success: true };
    case USERDELETE_CONTACTUS_FAIL:
      return { loading: false, error: action.payload };
    case USERDELETE_CONTACTUS_RESET:
      return {};
    default:
      return state;
  }
};
