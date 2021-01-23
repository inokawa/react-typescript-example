import { ThunkAction, ThunkDispatch } from "redux-thunk";
import reducer from "./rootReducer";

export type AppState = ReturnType<typeof reducer>;

export type AppAction = Parameters<typeof reducer>[1];

export type AppDispatch = ThunkDispatch<AppState, null, AppAction>;

export type ActionUnion<
  A extends {
    [key: string]: (...args: any[]) => any;
  }
> = ReturnType<A[keyof A]>;

export type AppThunk = ThunkAction<void, AppState, null, AppAction>;
