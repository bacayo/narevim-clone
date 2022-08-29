import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import IconSvg from '../../components/IconComponent/Icon';
import Colors from '../../constants/Colors/Colors';
import styles from './UserInfoScreenStyles';
import {memberInfoAsync} from '../../api';

const UserInfo = ({user, question}) => {
  return (
    <View style={styles.userContainer}>
      <IconSvg
        name="user"
        width={30}
        height={30}
        stroke={Colors.primaryColor}
      />
      <Text style={styles.question}>{question}</Text>
      <Text style={styles.answer}> {user}</Text>
    </View>
  );
};

const UserInfoScreen = () => {
  const dispatch = useDispatch();
  const {memberInfo} = useSelector(state => state.memberInfoSlice);
  console.log(memberInfo);

  useEffect(() => {
    dispatch(memberInfoAsync());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <UserInfo user={memberInfo?.name} question={'İsim Soyisim: '} />
      <UserInfo user={memberInfo?.email} question={'E-Posta Adresi: '} />
      <UserInfo user={memberInfo?.telephone} question={'Telefon Numarası: '} />
    </View>
  );
};

export default UserInfoScreen;
