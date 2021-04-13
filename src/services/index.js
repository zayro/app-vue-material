import axios from 'axios';
// import store from '@/store';

//const URL = 'http://127.0.0.1:8000/';
const URL = 'https://jsonplaceholder.typicode.com/';

// Axios Configuration
axios.defaults.headers.common.Accept = 'application/json'


const http = axios.create({
  baseURL: URL,
  headers: {
    'Authorization': `Bearer ${window.localStorage.getItem('_token')}`,
  }
});
// Add a request interceptor
http.interceptors.request.use((config)=> {
  // Do something before request is sent
  return config;
}, (error)=> {
  // Do something with request error

  return Promise.reject(error);
});

// Add a response interceptor
http.interceptors.response.use( (response)=> {
  // Do something with response data
  return response;
}, (error)=> {
  // Do something with response error

  return Promise.reject(error);
});

class axioService {
  axios
  baseUrl

  constructor(axios) {
      this.axios = axios
      this.baseUrl = 'https://jsonplaceholder.typicode.com'
  }

  getAll() {
      let self = this;
      return self.axios.get(`${self.baseUrl}/todos`);
  }

  get(id) {
      let self = this;
      return self.axios.get(`${self.baseUrl}todos/${id}`);
  }
}


export { http, URL, axioService };