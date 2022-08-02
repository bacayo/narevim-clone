import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: Dimensions.get('window').width / 6 + 10,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: '#da1e48',
  },
});
