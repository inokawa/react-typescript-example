import { SET_ON, SET_OFF } from './types';
import { Actions } from './actions';

type State = {
  isChecked: boolean;
};

const initialState: State = {
  isChecked: false
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case SET_ON:
      return {
        ...state,
        isChecked: action.payload.data
      };
    case SET_OFF:
      return {
        ...state,
        isChecked: action.payload.data
      };
    default:
      return { ...state };
  }
};

export default reducer;
