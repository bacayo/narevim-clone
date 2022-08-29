import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerTop: {
    fontWeight: '400',
    color: Colors.black,
    marginTop: 20,
    marginLeft: 40,
    padding: 10,
    fontSize: 16,
  },
  line: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  bottomHeaderTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 20,
    fontSize: 16,
  },
  headerBottom: {
    color: Colors.black,
    fontWeight: '400',
    marginLeft: 10,
  },
  city: {
    fontWeight: '400',
    color: Colors.black,
    fontSize: 16,
    padding: 5,
    marginLeft: 40,
  },
});
