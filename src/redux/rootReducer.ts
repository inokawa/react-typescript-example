import { combineReducers } from "redux";
import sample from "./sample/reducers";
import ui from "./ui/reducers";

const reducer = combineReducers({
  sample,
  ui,
});

export default reducer;
