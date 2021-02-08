import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import {useAuth} from '../../../contexts/auth';
import style from './styles';
import {showError, setErrorMessage} from '../../../helpers/input-error.helper';

const SignIn = () => {
  const {signIn} = useAuth();

  const [userForm, setUserForm] = useState({
    email: '',
    password: '',
  });
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSignin = async () => {
    setErrorMessage({
      fieldValue: userForm.email,
      fieldName: 'email',
      callback: setErrorEmail,
    });
    setErrorMessage({
      fieldValue: userForm.password,
      fieldName: 'password',
      callback: setErrorPassword,
    });

    if (userForm.email !== '' && userForm.password !== '') {
      try {
        setLoading(true);
        await signIn(userForm);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
  };
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }
  return (
    <View style={style.container}>
      <View style={style.container_inputs}>
        <Input
          errorStyle={style.input_error}
          errorMessage={showError(userForm.email, errorEmail)}
          onChangeText={(v) => setUserForm({...userForm, email: v})}
          value={userForm.email}
          placeholder="E-mail"
          leftIcon={<Icon name="user" size={24} color="black" />}
        />
        <Input
          errorStyle={style.input_error}
          errorMessage={showError(userForm.password, errorPassword)}
          onChangeText={(v) => setUserForm({...userForm, password: v})}
          value={userForm.password}
          placeholder="Password"
          secureTextEntry={true}
          leftIcon={<Icon name="lock" size={24} color="black" />}
        />
      </View>
      <Button
        buttonStyle={style.signinButton}
        raised
        title="Sign in"
        onPress={() => handleSignin()}
      />
    </View>
  );
};
export default SignIn;
