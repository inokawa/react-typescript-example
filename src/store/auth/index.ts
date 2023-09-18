import { atom } from "jotai";
import { selectAtom } from "jotai/utils";

export const authState = atom("");

export const isAuthedSelector = selectAtom(authState, (s) => !!s);
