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
    marginVertical: 5,
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
  cityCard: {
    padding: 10,
    color: Colors.black,
    fontSize: 16,
    fontWeight: '400',
  },
  cityModalList: {
    margin: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  cityTitle: {
    color: Colors.black,
    padding: 10,
    marginLeft: 20,
    flex: 1,
  },
  cityContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  cityModal: {
    margin: 20,
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 5,
    // backgroundColor: 'green',
  },
  saveBtn: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  saveBtnTitle: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
    borderWidth: 1,
  },
});
