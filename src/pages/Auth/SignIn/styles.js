import {StyleSheet} from 'react-native';
import {Colors} from '../../../styles';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  container_inputs: {
    paddingBottom: 30,
  },
  input_error: {
    fontSize: 14,
  },
  signinButton: {
    ...Colors.bgPrimary,
    padding: 15,
  },
});
