import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
const http = axios.create({
  baseURL: 'https://frozen-peak-68797.herokuapp.com',
});

http.interceptors.request.use(async (config) => {
  const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
  if (storagedToken) {
    config.headers.Authorization = `Bearer ${storagedToken}`;
  }
  return config;
});
export {http};
