import { SAMPLE_FETCH_REQUEST, SAMPLE_FETCH_SUCCEED, SAMPLE_FETCH_FAILED, } from './types';
import { Action } from '../types';

export const sampleFetchRequest = (): Action => ({ type: SAMPLE_FETCH_REQUEST, payload: {} });
export const sampleFetchSucceed = (): Action => ({ type: SAMPLE_FETCH_SUCCEED, payload: {} });
export const sampleFetchFailed = (): Action => ({ type: SAMPLE_FETCH_FAILED, payload: {} });
