import {
  AUTH_SIGN_IN_REQUEST,
  AUTH_SIGN_IN_SUCCEED,
  AUTH_SIGN_IN_FAILED,
  AUTH_SIGN_OUT_REQUEST,
  AUTH_SIGN_OUT_SUCCEED,
  AUTH_SIGN_OUT_FAILED,
} from "./types";

export const signInRequest = () => ({
  type: AUTH_SIGN_IN_REQUEST,
});

export const signInSucceed = (token: string) => ({
  type: AUTH_SIGN_IN_SUCCEED,
  payload: { token },
});

export const signInFailed = (error: Error) => ({
  type: AUTH_SIGN_IN_FAILED,
  payload: { error },
});

export const signOutRequest = () => ({
  type: AUTH_SIGN_OUT_REQUEST,
});

export const signOutSuceed = () => ({
  type: AUTH_SIGN_OUT_SUCCEED,
});

export const signOutFailed = (error: Error) => ({
  type: AUTH_SIGN_OUT_FAILED,
  payload: { error },
});
