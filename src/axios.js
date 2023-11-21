// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // Substitua pelo URL do seu backend
  timeout: 5000, 
});

export default instance;
