import axios from 'axios';
import { axiosError } from './errorHandler'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: {},
});

instance.interceptors.response.use(function(response) {
  return response;
}, function(err) {
  axiosError(err)
})

function setLocaleListener(locale) {
  instance.defaults.headers.common['Accept-Language'] = locale
}

export {
  instance,
  setLocaleListener,
};
