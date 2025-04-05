import axios from 'axios';
import {API_URL} from '../config/config';

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
