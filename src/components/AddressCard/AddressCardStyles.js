import {StyleSheet} from 'react-native';

import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    margin: 10,
    borderRadius: 10,
    padding: 20,
    backgroundColor: Colors.white,
  },
  addressDetail: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.black,
    padding: 5,
  },
  city: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.black,
    padding: 5,
  },
});