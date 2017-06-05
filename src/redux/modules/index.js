import { combineReducers } from 'redux';
import users from './users';
import { penderReducer } from 'redux-pender';

export default combineReducers({
    users,
    pender: penderReducer
});