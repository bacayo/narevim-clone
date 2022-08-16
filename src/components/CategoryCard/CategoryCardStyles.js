import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    marginBottom: 2,
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    marginLeft: 10,
    color: Colors.black,
    fontSize: 16,
  },
});
