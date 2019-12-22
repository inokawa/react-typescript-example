import { SAMPLE_FETCH_REQUEST, SAMPLE_FETCH_SUCCEED, SAMPLE_FETCH_FAILED } from './types';
import { Actions } from './actions';

type State = {
  data: string;
};

const initialState: State = {
  data: ''
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case SAMPLE_FETCH_REQUEST:
      return { ...state };
    case SAMPLE_FETCH_SUCCEED:
      return { ...state, data: action.payload.data };
    case SAMPLE_FETCH_FAILED:
      return { ...state };
    default:
      return { ...state };
  }
};

export default reducer;
