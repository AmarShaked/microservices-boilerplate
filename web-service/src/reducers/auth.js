import { AUTH_FAILED, LOGIN_SUCCESS, LOGOUT } from '../constants/actionTypes';
import { combineReducers } from 'redux';
import initialState from './initialState';


function isAuthenticated(state = initialState.auth.isAuthenticated, action) {
  switch (action.type) {

    case AUTH_FAILED:
    case LOGOUT:
      return false;

    case LOGIN_SUCCESS:
      return true;

    default:
      return state;
  }
}

function user(state = initialState.auth.user || null, action) {
  switch (action.type) {

    case LOGIN_SUCCESS:
      return action.user;

    case AUTH_FAILED:
    case LOGOUT:
      return null;

    default:
      return state;
  }
}

export default combineReducers({
  isAuthenticated,
  user
})