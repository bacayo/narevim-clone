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
});
