import React from 'react';
import {Text} from 'react-native';
import {useAuth} from '../../../contexts/auth';

function SignOut() {
  const {signOut} = useAuth();
  return (
    <Text style={{marginRight: 10}} onPress={signOut}>
      Logout
    </Text>
  );
}

export default SignOut;
