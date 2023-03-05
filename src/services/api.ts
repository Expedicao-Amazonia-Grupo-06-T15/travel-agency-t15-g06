import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://expedicao-amazonia.herokuapp.com',
  timeout: 10000,
});
