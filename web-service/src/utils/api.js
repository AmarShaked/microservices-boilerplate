import axios from 'axios';

export const API_GATEWAY = process.env.REACT_APP_API_GATEWAY;

export const api = (url, options) => {
  return axios(`${API_GATEWAY}${url}`, options);
}