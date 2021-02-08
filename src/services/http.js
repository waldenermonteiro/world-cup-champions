import axios from 'axios';

const http = axios.create({
  baseURL: 'https://frozen-peak-68797.herokuapp.com',
});

export {http};
