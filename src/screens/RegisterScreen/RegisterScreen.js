import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import TextInputCard from '../../components/TextInputCard';
import Strings from '../../constants/Strings/Strings';
import Colors from '../../constants/Colors/Colors';
import styles from './RegisterScreenStyles';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.accountInfoContainer}>
        <Text style={styles.headerTitle}>{Strings.contackInfo}</Text>
        <TextInputCard
          name={'user'}
          width={35}
          height={35}
          stroke={Colors.primaryColor}
          placeholder={Strings.firstName}
        />
        <TextInputCard
          name={'user'}
          width={35}
          height={35}
          stroke={Colors.primaryColor}
          placeholder={Strings.surname}
        />
        <TextInputCard
          name={'phone'}
          width={35}
          height={35}
          stroke={Colors.primaryColor}
          placeholder={Strings.phone}
        />
      </View>
      <View style={styles.mailAndPasswordContainer}>
        <Text style={styles.headerTitle}>{Strings.emailAndPassword}</Text>
        <TextInputCard
          name={'mail'}
          width={35}
          height={35}
          stroke={Colors.primaryColor}
          placeholder={Strings.email}
        />
        <TextInputCard
          name={'key'}
          width={35}
          height={35}
          stroke={Colors.primaryColor}
          placeholder={Strings.password}
        />
        <TouchableOpacity style={styles.btnSave}>
          <Text style={styles.btnSaveTitle}>{Strings.save}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
