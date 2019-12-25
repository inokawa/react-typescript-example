import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import reducer from './rootReducer';

export type AppState = ReturnType<typeof reducer>;

export type Operation = ThunkAction<void, AppState, null, AnyAction>;
