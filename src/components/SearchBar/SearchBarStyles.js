import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  searchSection: {
    margin: 10,
    flexDirection: 'row',
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
    top: 8,
  },
  input: {
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
  },
});
