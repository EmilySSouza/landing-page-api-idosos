import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://apiidosos.onrender.com/eventos',
});
