import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'http://localhost:3456',
// });
const instance = axios.create({
  baseURL: 'http://localhost:3456', // ganti dengan URL API Anda
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
      console.log(
        'Looks like there was a problem. Status Code: ',
        error.response.status,
      );
      return Promise.reject(error);
    } else {
      console.log('server unavailable');
    }
  },
);

export default instance;
