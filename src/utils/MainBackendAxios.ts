import axios, { AxiosInstance } from 'axios';
import { APP_LANGUAGE, MAIN_BACKEND_URL } from '../config/Config';

const instance: AxiosInstance = axios.create({
  baseURL: MAIN_BACKEND_URL,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    lang: APP_LANGUAGE,
  },
});

export default instance;
