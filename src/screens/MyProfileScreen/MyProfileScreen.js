import {View, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './MyProfileScreenStyles';

import TextInputCard from '../../components/TextInputCard/TextInputCard';
import Colors from '../../constants/Colors/Colors';
import ButtonComponent from '../../components/ButtonComponent';

const MyProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require('../../assets/narlogo.png')}
        />
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <TextInputCard
            name={'user'}
            width={35}
            height={35}
            stroke={Colors.primaryColor}
            placeholder={'E-Posta'}
            keyboardType={'email-address'}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInputCard
            name={'key'}
            width={35}
            height={35}
            stroke={Colors.primaryColor}
            placeholder={'Şifre'}
            secureTextEntry
          />
        </View>

        <View style={styles.btnContainer}>
          {/* <ButtonComponent title={'Giriş yap'} /> */}
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginBtnTitle}>Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerBtn}>
            <Text style={styles.registerBtnTitle}>Kayıt ol</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resetPasswordBtn}>
            <Text style={styles.resetPasswordBtnTitle}>Şifremi Unuttum</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MyProfileScreen;
