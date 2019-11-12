import axios from 'axios';
import { baseUrl } from './config';

const require = axios.create({
  baseURL: baseUrl
});

require.interceptors.response.use((res) => {
  const data = res.data;
  return data;
},
  (err) => {
    console.log(err);
  });

export default require;
