import { api } from './api';

export const login = (email, password) => {

  const options = {
    method: "POST",
    data: {
      email,
      password
    }
  }

  return api('/auth/login', options);
}

export const signup = (email, password, confirmPassword) => {

  const options = {
    method: "POST",
    data: {
      email,
      password,
      confirmPassword
    }
  }

  return api('/auth/signup', options);
}

export const logout = () => {

  const options = {
    method: "POST"
  }

  return api('/auth/logout', options);
}