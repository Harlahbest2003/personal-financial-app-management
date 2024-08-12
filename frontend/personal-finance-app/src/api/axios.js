import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://your-api-url.com',
});

export default instance;