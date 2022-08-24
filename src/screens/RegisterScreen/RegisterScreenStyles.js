import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  accountInfoContainer: {},
  mailAndPasswordContainer: {},
  headerTitle: {
    padding: 20,
    color: Colors.black,
    fontWeight: '400',
  },
  btnSave: {
    padding: 15,
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 10,
    width: '70%',
    alignSelf: 'center',
  },
  btnSaveTitle: {
    textAlign: 'center',
    color: Colors.white,
  },
});
