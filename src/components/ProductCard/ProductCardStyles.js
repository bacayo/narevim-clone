import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors/Colors';

export default StyleSheet.create({
  container: {
    // width: Dimensions.get('window').width / 2,
    // marginHorizontal: 5,
    margin: 5,
    flex: 1,
    marginBottom: 5,
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
  image: {
    height: 140,
    width: '100%',
    resizeMode: 'contain',
    flex: 1,
  },
  innerContainer: {
    marginTop: 20,
  },
  brand: {
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 10,
  },
  title: {
    color: 'black',
    marginLeft: 10,
  },
  star: {
    color: '#ffa500',
    fontSize: 15,
  },
  starContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  review: {
    color: 'black',
    marginLeft: 5,
    fontSize: 12,
  },
  price: {
    textAlign: 'center',
    color: Colors.primaryColor,
    paddingVertical: 10,
  },
  btn: {
    padding: 10,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 5,
    // marginBottom: 10,
  },
  btnTitle: {
    textAlign: 'center',
    color: 'black',
  },
});
