import { SAMPLE_FETCH_REQUEST, SAMPLE_FETCH_SUCCEED, SAMPLE_FETCH_FAILED } from './types';
import { Actions } from './actions';

type State = Readonly<{
  data: string;
  error: Error | null;
}>;

const initialState: State = {
  data: '',
  error: null
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case SAMPLE_FETCH_REQUEST:
      return { ...state };
    case SAMPLE_FETCH_SUCCEED:
      return {
        ...state,
        data: action.payload.data,
        error: null
      };
    case SAMPLE_FETCH_FAILED:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return { ...state };
  }
};

export default reducer;
