import {
  useDispatch as _useDispatch,
  useSelector as _useSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { AppState, AppDispatch } from "./types";

export const useDispatch: () => AppDispatch = _useDispatch;
export const useSelector: TypedUseSelectorHook<AppState> = _useSelector;

export { default as configureStore } from "./configureStore";
