import { combineReducers } from 'redux'
import sample from './sample/reducers';
import form from './ui/form/reducers';

const reducer = combineReducers({
  sample,
  ui: combineReducers({
    form
  })
});

export default reducer;
