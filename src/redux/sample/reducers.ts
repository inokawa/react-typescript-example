import { AnyAction } from 'redux';

type State = {};

const initialState: State = {}

const reducer = (state: State = initialState, action: AnyAction): State => {
  switch (action.type) {
    default:
      return { ...state };
  }
}

export default reducer;
