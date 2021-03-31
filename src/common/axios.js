import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: {},
});

function setLocaleListener(locale) {
  instance.defaults.headers.common['Accept-Language'] = locale
}

export {
  instance,
  setLocaleListener,
};
