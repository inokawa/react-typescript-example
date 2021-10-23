import { createStore, applyMiddleware, Middleware } from "redux";
import rootReducer from "./rootReducer";

export default () => {
  const middleWares: Middleware[] = [];
  return createStore(rootReducer, applyMiddleware(...middleWares));
};
