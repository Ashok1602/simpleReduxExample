import axios from "axios";
import { DEMO_API_CONST } from "../actions/actionTypes";

export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}
export function parseJSON(response) {
  return response.data;
}

// action for getResponse
export function getResponse() {
  return (dispatch) => {
    dispatch({ type: DEMO_API_CONST.REQUEST });
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: DEMO_API_CONST.SUCCESS, payload: response });
        } else {
          dispatch({ type: DEMO_API_CONST.SUCCESS, payload: response });
        }
      })
      .catch((error) => {
        dispatch({ type: DEMO_API_CONST.SUCCESS, payload: error });
      });
  };
}
