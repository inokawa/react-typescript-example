import { combineReducers } from "redux";
import auth from "./auth/reducers";
import sample from "./sample/reducers";

const reducer = combineReducers({
  auth,
  sample,
});

export default reducer;
