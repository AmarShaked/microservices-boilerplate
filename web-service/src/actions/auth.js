import { login, logout, signup } from '../utils/auth';
import { LOGIN_SUCCESS, LOGOUT } from '../constants/actionTypes';

const loginSuccess = user => ({ type: LOGIN_SUCCESS, user });

export const loginAction = (email, password) => (dispatch) => {
    return login(email, password)
      .then((res) => {
        const user = res.data;
        dispatch(loginSuccess(user));
        return user;
      })
};

export const signupAction = (email, password, confirmPassword) => (dispatch) => {
    return signup(email, password, confirmPassword)
      .then((res) => {
        const user = res.data;
        dispatch(loginSuccess(user));
        return user;
      })
};

export const logoutAction = () => (dispatch) => {
    dispatch({type: LOGOUT});
    return logout();
};
