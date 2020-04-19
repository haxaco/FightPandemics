import { AUTH_LOGIN, AUTH_LOGOUT, SET_USER } from "../constants/action-types";

const initialState = {
  accessToken: null,
  isAuthenticated: false,
  user: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        accessToken: action.payload.token,
        isAuthenticated: true,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        accessToken: null,
        isAuthenticated: false,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
