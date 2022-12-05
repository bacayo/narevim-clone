import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    margin: 10,
    borderRadius: 5,
  },
  centeredView: {
    margin: 10,
    justifyContent: 'center',
    flex: 1,
    borderRadius: 5,
  },
  modalView: {
    borderRadius: 5,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: Colors.white,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    borderRadius: 5,
    padding: 10,

    flexDirection: 'row',
    alignItems: 'center',
  },
  currentMethodTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
    color: Colors.black,
  },
  innerContainer: {
    padding: 10,
    margin: 10,
  },
  paymentTitleContainer: {
    padding: 5,
  },
  paymentTitle: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: '400',
    padding: 5,
  },
  heading: {
    marginVertical: 2,
    color: Colors.black,
    fontSize: 16,
    fontWeight: '400',
  },
  couponBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
    justifyContent: 'center',
  },
  couponBtnTitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: Colors.white,
  },
  couponContainer: {
    flexDirection: 'row',
  },
  couponInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    borderRadius: 5,
  },
  payBtn: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.primaryColor,
    marginHorizontal: 20,
  },
  payBtnTitle: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});
