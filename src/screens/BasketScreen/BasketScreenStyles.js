import {StyleSheet} from 'react-native';

import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  footer: {
    flexDirection: 'row',
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  basket: {
    flex: 1,
  },
  basketTitle: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '400',
  },
  price: {
    color: Colors.primaryColor,
    fontSize: 16,
    fontWeight: '700',
  },
  shopBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 5,
  },
  shopBtnTitle: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '400',
  },
});
