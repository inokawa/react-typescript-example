import { SAMPLE_FETCH_REQUEST, SAMPLE_FETCH_SUCCEED, SAMPLE_FETCH_FAILED } from './types';
import { Actions } from './actions';

type State = {};

const initialState: State = {};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case SAMPLE_FETCH_REQUEST:
    case SAMPLE_FETCH_SUCCEED:
    case SAMPLE_FETCH_FAILED:
    default:
      return { ...state };
  }
};

export default reducer;
