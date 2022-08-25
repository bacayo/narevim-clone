import {StyleSheet} from 'react-native';

import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  listContainer: {
    padding: 10,
    marginHorizontal: 10,
    // marginTop: 30,
    marginTop: 10,
    justifyContent: 'center',
  },
  press: {
    flexDirection: 'row',
  },
  listTitle: {
    flex: 1,
    color: Colors.black,
    fontSize: 16,
    marginLeft: 5,
  },
  line: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
