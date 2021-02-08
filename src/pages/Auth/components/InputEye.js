import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function InputEye(prop) {
  if (prop.secureTextEntry) {
    return (
      <Icon
        name="eye"
        size={24}
        color="grey"
        onPress={() => prop.click(false)}
      />
    );
  }
  return (
    <Icon
      name="eye-slash"
      size={24}
      color="grey"
      onPress={() => prop.click(true)}
    />
  );
}
