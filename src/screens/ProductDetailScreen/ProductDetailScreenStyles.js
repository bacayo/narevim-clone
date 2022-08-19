import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 3,
    color: Colors.white,
  },
  outherContainer: {
    flex: 1,
    color: Colors.white,
  },
  swiperContainer: {
    height: 500,
  },
  image: {
    height: 500,
    resizeMode: 'contain',
    borderWidth: 1,
  },
});
