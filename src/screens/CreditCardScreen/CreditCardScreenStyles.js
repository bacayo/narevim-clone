import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.white,
    backgroundColor: Colors.white,
  },
  outherContainer: {
    borderWidth: 2,
    borderColor: '#e0e0e0',
    margin: 20,
    padding: 10,
    borderRadius: 5,
    elevation: 1,
  },
  inputContainer: {},
  header: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'left',
    alignSelf: 'center',
    width: '70%',
  },
  input: {
    borderRadius: 5,
    padding: 5,
    width: '70%',
    alignSelf: 'center',
    shadowColor: Colors.primaryColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  cardBackInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  securityInput: {
    borderRadius: 5,
    shadowColor: Colors.primaryColor,
    shadowOffset: {
      width: 0,
      height: 0.45,
    },
    shadowOpacity: 0.18,
    shadowRadius: 0.65,
    elevation: 1,
  },
  smallContainer: {
    flex: 1,
  },
  transBtn: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.primaryColor,
  },
  transBtnTitle: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 16,
  },
  totalPriceContainer: {
    flexDirection: 'row',
    padding: 5,
    margin: 5,
  },
  totalPrice: {
    flex: 1,
    textAlign: 'center',
    padding: 5,
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black,
  },
  totalPriceTitle: {
    flex: 1,
    textAlign: 'center',
    padding: 5,
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    padding: 5,
  },
  headerBottom: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.black,
    fontWeight: '700',
    padding: 5,
  },
  cvvContainer: {
    width: '70%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
});
