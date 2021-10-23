import * as actions from "../redux/auth/actions";
import { AppDispatch } from "../redux/types";

const dummySignInApi = (request: {
  name: string;
  password: string;
}): Promise<string> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("dummy");
    }, 1000);
  });
};

const dummySignOutApi = (request: any): Promise<void> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, 1000);
  });
};

export const signIn = async (
  dispatch: AppDispatch,
  name: string,
  password: string,
  onSuccess: () => void
) => {
  try {
    dispatch(actions.signInRequest());
    const token = await dummySignInApi({ name, password });
    dispatch(actions.signInSucceed(token));
    onSuccess();
  } catch (e) {
    if (e instanceof Error) {
      dispatch(actions.signInFailed(e));
    }
  }
};

export const signOut = async (dispatch: AppDispatch, onSuccess: () => void) => {
  try {
    dispatch(actions.signOutRequest());
    await dummySignOutApi({});
    dispatch(actions.signOutSuceed());
    onSuccess();
  } catch (e) {
    if (e instanceof Error) {
      dispatch(actions.signOutFailed(e));
    }
  }
};
