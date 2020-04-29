import { Reducer } from "redux";
import { SET_ON, SET_OFF } from "./types";
import { Actions } from "./actions";

type State = Readonly<{
  isChecked: boolean;
}>;

const initialState: State = {
  isChecked: false,
};

const reducer: Reducer<State, Actions> = (state = initialState, action) => {
  switch (action.type) {
  case SET_ON:
    return {
      ...state,
      isChecked: action.payload.data,
    };
  case SET_OFF:
    return {
      ...state,
      isChecked: action.payload.data,
    };
  default:
    return { ...state };
  }
};

export default reducer;
