import {Text, Pressable, View} from 'react-native';
import React from 'react';

import IconSvg from '../IconComponent/Icon';
import styles from './ListCardStyles';

const ListCard = ({title, iconName, onPress}) => {
  return (
    <View style={styles.listContainer}>
      <Pressable style={styles.press} onPress={onPress}>
        <IconSvg
          style={styles.icon}
          name={iconName}
          width={30}
          height={30}
          stroke={'black'}
        />
        <Text style={styles.listTitle}>{title}</Text>
        <IconSvg name="arrowRight" width={30} height={30} stroke={'black'} />
      </Pressable>
      <View style={styles.line} />
    </View>
  );
};

export default ListCard;
