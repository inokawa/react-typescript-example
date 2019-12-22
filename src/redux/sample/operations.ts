import { Operation } from '../types';
import { sampleFetchRequest, sampleFetchSucceed, } from './actions';

export const fetchSample = (): Operation => async dispatch => {
    dispatch(sampleFetchRequest());
    dispatch(sampleFetchSucceed('test'));
};
