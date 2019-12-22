import { SAMPLE_FETCH_REQUEST, SAMPLE_FETCH_SUCCEED, SAMPLE_FETCH_FAILED, } from './types';

export const sampleFetchRequest = () => ({ type: SAMPLE_FETCH_REQUEST, payload: {} });
export const sampleFetchSucceed = (data: string) => ({ type: SAMPLE_FETCH_SUCCEED, payload: { data } });
export const sampleFetchFailed = () => ({ type: SAMPLE_FETCH_FAILED, payload: {} });

export type Actions = ReturnType<typeof sampleFetchRequest | typeof sampleFetchSucceed | typeof sampleFetchFailed>;
