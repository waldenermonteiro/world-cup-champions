import React, {createContext, useEffect, useState, useContext} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AuthService from '../pages/Auth/services/';
import {http} from '../services/http';
const AuthContext = createContext({signed: true});

const AuthProvider = ({children}) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
      if (storagedToken) {
        setToken(storagedToken);
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  async function signIn(params) {
    try {
      const {Token} = await AuthService.signIn(params);

      http.defaults.headers.Authorization = `Bearer ${Token}`;

      setToken(Token);

      await AsyncStorage.setItem('@RNAuth:token', Token);
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  async function signOut() {
    setToken(null);
    await AsyncStorage.clear();
  }

  return (
    <AuthContext.Provider value={{loading, signed: !!token, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};
function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export {AuthProvider, useAuth};
