import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  cardContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderRadius: 5,
    // borderColor: '#7F8487',
    borderColor: '#e0e0e0',
    elevation: 5,
  },
  heading: {
    flexDirection: 'row',
    padding: 5,
  },
  orderDetail: {
    flex: 1,
    padding: 2,
  },
  orderDate: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '700',
  },
  total: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: '400',
  },
  amount: {
    fontSize: 14,
    color: Colors.primaryColor,
    fontWeight: '400',
  },
  detailTitle: {
    color: Colors.primaryColor,
    fontWeight: '400',
  },
  line: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: 'aqua',
  },
});
