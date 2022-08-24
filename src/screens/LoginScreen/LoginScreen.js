import {View, Image, TouchableOpacity, Text, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './LoginScreenStyles';
import TextInputCard from '../../components/TextInputCard/TextInputCard';
import Colors from '../../constants/Colors/Colors';
import Strings from '../../constants/Strings/Strings';
import {loginAsync} from '../../api';
import {resetLogin} from '../../redux/narevim/loginSlice';

const LoginScreen = () => {
  const navigation = useNavigation();
  const {loginStatus} = useSelector(state => state.loginSlice);

  const handleRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginAsync({email, password}));
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (loginStatus === 'success') {
      navigation.navigate('AccountScreen');
    } else if (loginStatus === 'error') {
      dispatch(resetLogin);
      Alert.alert('Email yada parola yanlış');
    }
  }, [dispatch, loginStatus, navigation]);

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
            placeholder={Strings.email}
            keyboardType={'email-address'}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInputCard
            name={'key'}
            width={35}
            height={35}
            stroke={Colors.primaryColor}
            placeholder={Strings.password}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.btnContainer}>
          {/* <ButtonComponent title={'Giriş yap'} /> */}
          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginBtnTitle}>Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerBtn} onPress={handleRegister}>
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

export default LoginScreen;
