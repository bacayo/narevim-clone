import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  userContainer: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  question: {
    color: Colors.primaryColor,
    fontSize: 16,
    fontWeight: '700',
  },
  answer: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '400',
  },
});
