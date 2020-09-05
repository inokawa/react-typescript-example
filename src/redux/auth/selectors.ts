import { AppState } from "..";
import { createSelector } from "reselect";

export const getAuth = (state: AppState) => state.auth;

export const getToken = createSelector(getAuth, (state) => state.token);

export const isAuthed = createSelector(getAuth, (state) => !!state.token);
