import { SIGN_IN, SIGN_OUT } from "../actions/types";
const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

// When application starts reducer is called to initialize it.
// If the reducer gets called with argument value of UNDEFINED,
// the state will be set to INITIAL_STATE
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
