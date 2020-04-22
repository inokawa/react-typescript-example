import { Operation } from '..';
import { sampleFetchRequest, sampleFetchSucceed, sampleFetchFailed, } from './actions';

export const fetchSample = (): Operation => async dispatch => {
    try {
        dispatch(sampleFetchRequest());
        dispatch(sampleFetchSucceed('test'));
    } catch (e) {
        dispatch(sampleFetchFailed(e));
    }
};
