import React, {createContext, useEffect, useState, useContext} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AuthService from '../pages/Auth/services/';
import http from '../services/http';

const AuthContext = createContext({signed: true, token: '', user: {}});

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    }

    loadStorageData();
  });

  async function signIn(params) {
    try {
      const response = await AuthService.signIn(params);

      setUser(response.user);

      http.defaults.headers.Authorization = `Bearer ${response.token}`;
      await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
      await AsyncStorage.setItem('@RNAuth:token', response.token);
    } catch (error) {
      Alert.alert(error);
    }
  }

  async function signOut() {
    setUser(null);
    await AsyncStorage.clear();
  }

  return (
    <AuthContext.Provider
      value={{loading, signed: !!user, user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};
function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export {AuthProvider, useAuth};
