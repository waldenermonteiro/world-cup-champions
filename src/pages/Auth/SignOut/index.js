import React from 'react';
import {Text} from 'react-native';

function SignOut() {
  const signOut = () => {};
  return (
    <Text style={{marginRight: 10}} onPress={signOut}>
      Logout
    </Text>
  );
}

export default SignOut;
