import { combineReducers } from 'redux'
import sample from './sample/reducers';

const reducer = combineReducers({ sample });

export type AppState = ReturnType<typeof reducer>;

export default reducer;
