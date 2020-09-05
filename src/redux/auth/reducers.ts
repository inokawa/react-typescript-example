import { Reducer } from "redux";
import { ActionUnion } from "../";
import * as types from "./types";
import * as actions from "./actions";

type Actions = ActionUnion<typeof actions>;

type State = Readonly<{
  token: string | null;
  error: Error | null;
}>;

const initialState: State = {
  token: null,
  error: null,
};

const reducer: Reducer<State, Actions> = (state = initialState, action) => {
  switch (action.type) {
  case types.AUTH_SIGN_IN_REQUEST:
    return { ...state, error: null };
  case types.AUTH_SIGN_IN_SUCCEED:
    return { ...state, token: action.payload.token };
  case types.AUTH_SIGN_IN_FAILED:
    return { ...state, error: action.payload.error };
  case types.AUTH_SIGN_OUT_REQUEST:
    return { ...state, error: null };
  case types.AUTH_SIGN_OUT_SUCCEED:
    return { ...state, token: null };
  case types.AUTH_SIGN_OUT_FAILED:
    return { ...state, error: action.payload.error };
  default:
    return { ...state };
  }
};

export default reducer;
