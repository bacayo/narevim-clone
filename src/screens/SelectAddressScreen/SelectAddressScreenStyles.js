import {StyleSheet} from 'react-native';

import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  addressContainer: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    margin: 10,
    borderRadius: 10,
    padding: 20,
    backgroundColor: Colors.white,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  addressDetail: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.black,
    padding: 5,
    flex: 1,
  },
  city: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.black,
    padding: 5,
  },
});
