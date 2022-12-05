import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './SearchBarStyles';

import SearchIcon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors/Colors';

const SearchBar = ({placeholder, onPress, value, onChangeText}) => {
  return (
    <View style={styles.searchSection}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={placeholder}
      />
      <SearchIcon
        onPress={onPress}
        style={styles.searchIcon}
        name="search"
        size={30}
        color={Colors.primaryColor}
      />
    </View>
  );
};

export default SearchBar;
