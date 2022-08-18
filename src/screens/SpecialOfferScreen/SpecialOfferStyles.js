import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  pressable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 10,
  },
  icon: {
    flexDirection: 'row',
  },
  sortIcon: {
    fontSize: 26,
    color: Colors.primaryColor,
  },
  sortText: {
    fontSize: 18,
    padding: 10,
    fontWeight: '400',
    color: Colors.primaryColor,
  },
  seperatorLine: {
    borderWidth: 0.5,
    borderColor: Colors.primaryColor,
  },
  list: {
    marginTop: 20,
  },
});
