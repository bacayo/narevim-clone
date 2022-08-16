import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    // width: Dimensions.get('window').width / 6 + 10,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: '#da1e48',
    margin: 5,
  },
  banner: {
    color: Colors.primaryColor,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
    textDecorationLine: 'underline',
    textDecorationColor: Colors.primaryColor,
  },
  brandsBanner: {
    fontWeight: 'bold',
    color: Colors.primaryColor,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    textDecorationLine: 'underline',
    textDecorationColor: Colors.primaryColor,
  },
});
