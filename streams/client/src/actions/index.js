import streams from "../apis/streams";
import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

/**
 * POST
 * @param {object} formValues - Contains form values for creating stream
 */
export const createStream = formValues => {
  return async dispatch => {
    // response from axios
    const response = await streams.post("./streams", formValues);

    // This step is to store the create_steam data in the Redux Store or State
    dispatch({ type: CREATE_STREAM, payload: response.data });
  };
};
