import {StyleSheet} from 'react-native';

import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: Colors.white,
  },
  logo: {
    tintColor: Colors.primaryColor,
    padding: 10,
    marginTop: 40,
    alignSelf: 'center',
  },
  listContainer: {
    padding: 10,
    marginHorizontal: 10,
    marginTop: 30,
  },
  line: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  press: {
    flexDirection: 'row',
  },
  listTitle: {
    flex: 1,
    color: Colors.black,
  },
});
