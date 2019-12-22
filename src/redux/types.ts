import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from './rootReducer';

export type Action = AnyAction & { payload: any };

export type Operation = ThunkAction<void, AppState, null, Action>;
