import { SAMPLE_FETCH_REQUEST, SAMPLE_FETCH_SUCCEED, SAMPLE_FETCH_FAILED, } from "./types";

export const sampleFetchRequest = () => ({ type: SAMPLE_FETCH_REQUEST });
export const sampleFetchSucceed = () => ({ type: SAMPLE_FETCH_SUCCEED });
export const sampleFetchFailed = () => ({ type: SAMPLE_FETCH_FAILED });
