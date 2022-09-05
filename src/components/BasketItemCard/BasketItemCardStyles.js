import {StyleSheet} from 'react-native';

import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brand: {
    textAlign: 'center',
    flex: 1,
    color: Colors.black,
    fontSize: 16,
    fontWeight: '700',
  },
  binIcon: {},
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  productImg: {
    flex: 1,
  },
  bottomContainer: {
    padding: 10,
    flex: 3,
  },
  quantityContainer: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  btnMinus: {
    padding: 10,
    backgroundColor: Colors.primaryColor,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    justifyContent: 'center',
  },
  btnPlus: {
    padding: 10,
    backgroundColor: Colors.primaryColor,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
  },
  quantity: {
    color: Colors.black,
    fontSize: 16,
    backgroundColor: '#e0e0e0',
    padding: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  productTitle: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '400',
  },
  productPrice: {
    color: Colors.primaryColor,
    fontSize: 16,
    fontWeight: '400',
  },
  imgBtn: {
    flex: 1,
  },
});
