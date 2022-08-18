import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: '600',
  },
  headerTitle: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  description: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '400',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'orange',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.black,
  },
  icon: {
    fontSize: 30,
  },
  btn: {
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 5,
  },
  btnTitle: {
    color: Colors.white,
  },
});
