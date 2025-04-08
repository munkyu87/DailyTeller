import axios from 'axios';
import {API_URL} from 'src/config/config';

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
