import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';

import TextInputCard from '../../components/TextInputCard';
import Colors from '../../constants/Colors/Colors';
import styles from './ChangePasswordScreenStyles';
import {useDispatch} from 'react-redux';
import {changePasswordAsync} from '../../api';

const ChangePasswordScreen = () => {
  const [oldPassWord, setOldPassword] = useState('');
  const [newPassWord, setNewPassword] = useState('');

  const dispatch = useDispatch();

  const changePassword = () => {
    dispatch(
      changePasswordAsync({
        old_password: oldPassWord,
        new_password: newPassWord,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/narlogo.png')} />
      <View style={styles.innerContainer}>
        <TextInputCard
          name={'key'}
          width={25}
          height={25}
          placeholder={'Eski Şifre'}
          stroke={Colors.primaryColor}
          secureTextEntry
          value={oldPassWord}
          onChangeText={setOldPassword}
        />
        <TextInputCard
          name={'key'}
          width={25}
          height={25}
          placeholder={'Yeni Şifre'}
          stroke={Colors.primaryColor}
          secureTextEntry
          value={newPassWord}
          onChangeText={setNewPassword}
        />
        <TouchableOpacity style={styles.btn} onPress={changePassword}>
          <Text style={styles.btnTitle}>Şifreyi Değiştir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePasswordScreen;
