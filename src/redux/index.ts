import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import reducer from './rootReducer';
import configureStore from './configureStore';

export type AppState = ReturnType<typeof reducer>;

export type AppDispatch = ReturnType<typeof configureStore>['dispatch'];

export type Operation = ThunkAction<void, AppState, null, AnyAction>;
