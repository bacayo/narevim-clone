import {View, TextInput} from 'react-native';
import React from 'react';

import IconSvg from '../IconComponent/Icon';
import styles from './TextInputCardStyles';
import Colors from '../../constants/Colors/Colors';

const TextInputCard = ({
  placeholder,
  name,
  width,
  height,
  stroke,
  keyboardType,
  secureTextEntry,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <IconSvg name={name} width={width} height={height} stroke={stroke} />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        selectionColor={Colors.primaryColor}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default TextInputCard;
