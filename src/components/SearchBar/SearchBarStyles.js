import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  searchSection: {
    margin: 10,
    flexDirection: 'row',
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderRadius: 5,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    // borderColor: Colors.primaryColor,
    // borderWidth: 1,
    // borderRadius: 5,
    flex: 1,
    marginLeft: 10,
  },
});
