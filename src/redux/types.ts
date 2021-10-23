import { Dispatch } from "redux";
import reducer from "./rootReducer";

export type AppState = ReturnType<typeof reducer>;

export type AppAction = Parameters<typeof reducer>[1];

export type AppDispatch = Dispatch<AppAction>;

export type ActionUnion<
  A extends {
    [key: string]: (...args: any[]) => any;
  }
> = ReturnType<A[keyof A]>;
