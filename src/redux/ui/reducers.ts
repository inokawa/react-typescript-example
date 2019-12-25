import { combineReducers } from 'redux';
import form from './form/reducers';
import select from './select/reducers';

const reducer = combineReducers({
    form,
    select
});

export default reducer;
