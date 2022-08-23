import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: 'green',
  },
  logo: {
    tintColor: Colors.primaryColor,
    alignSelf: 'center',
    marginTop: 40,
  },
  loginContainer: {
    marginVertical: 45,
  },
  btnContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    minHeight: '20%',
  },
  loginBtn: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.primaryColor,
    // marginRight: 15,
    marginLeft: 30,
    // marginTop: 20,
    width: '70%',
  },
  loginBtnTitle: {
    textAlign: 'center',
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerBtn: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.white,
    // marginRight: 15,
    marginLeft: 30,
    // marginTop: 20,
    width: '70%',
    borderColor: Colors.primaryColor,
    borderWidth: 1,
  },
  registerBtnTitle: {
    textAlign: 'center',
    color: Colors.primaryColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  resetPasswordBtn: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.white,
    // marginRight: 15,
    marginLeft: 30,
    // marginTop: 20,
    width: '70%',
    borderWidth: 1,
    borderColor: '#17a2b8',
  },
  resetPasswordBtnTitle: {
    textAlign: 'center',
    color: '#17a2b8',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
