import { AnyAction } from "redux";

export type Action = AnyAction & { payload: any };
