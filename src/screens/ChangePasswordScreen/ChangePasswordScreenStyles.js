import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  logo: {
    tintColor: Colors.primaryColor,
    padding: 10,
    marginTop: 40,
    alignSelf: 'center',
  },
  innerContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    padding: 10,
    backgroundColor: Colors.primaryColor,
    borderRadius: 5,
    margin: 10,
    textAlign: 'center',
    width: '70%',
  },
  btnTitle: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});
