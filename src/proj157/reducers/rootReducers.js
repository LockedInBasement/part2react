import  { combineReducers } from 'redux';

import appReducer from './appRecuder';

export const rootReducer = combineReducers({
    rates: appReducer,
});