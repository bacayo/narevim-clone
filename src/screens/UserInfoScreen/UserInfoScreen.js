import {View, Text} from 'react-native';
import React from 'react';

import IconSvg from '../../components/IconComponent/Icon';
import Colors from '../../constants/Colors/Colors';
import styles from './UserInfoScreenStyles';

const UserInfoScreen = () => {
  return (
    <View style={styles.container}>
      <IconSvg
        name="user"
        width={30}
        height={30}
        stroke={Colors.primaryColor}
      />
      <Text style={styles.question}>İsim Soyisim :</Text>
      <Text style={styles.answer}>batuhan yolcu</Text>
    </View>
  );
};

export default UserInfoScreen;
