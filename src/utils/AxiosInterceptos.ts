import { AxiosError, AxiosRequestConfig } from 'axios';
import instance from './MainBackendAxios';
import moment from 'moment/moment';
import 'moment-timezone';

const setUpInterceptor = (store: any) => {
  const handleError = async (error: AxiosError) => {
    return Promise.reject(error);
  };

  instance.interceptors.request.use(
    async (config: any | AxiosRequestConfig) => {
      config.headers.timezone = moment.tz.guess();

      let token = store.getState().auth.token;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    }
  );

  instance.interceptors.response.use((response) => response, handleError);
};

export default setUpInterceptor;
