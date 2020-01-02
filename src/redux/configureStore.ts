import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export default () => {
  const middleWares = [thunk];
  return createStore(rootReducer, applyMiddleware(...middleWares));
};
