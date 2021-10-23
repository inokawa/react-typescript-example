import { AppState } from "../types";

export const getAuth = (state: AppState) => state.auth;

export const getToken = (state: AppState) => state.auth.token;

export const isAuthed = (state: AppState) => !!state.auth.token;
