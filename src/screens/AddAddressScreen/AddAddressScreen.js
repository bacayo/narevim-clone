import {
  View,
  Text,
  Modal,
  Pressable,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {addressListAsync, getTownAsync, saveAddressAsync} from '../../api';
import TextInputCard from '../../components/TextInputCard';
import IconSvg from '../../components/IconComponent/Icon';
import Colors from '../../constants/Colors/Colors';
import Strings from '../../constants/Strings/Strings';
import styles from './AddAddressScreenStyles';

const TestAdressScreen = () => {
  const {city} = useSelector(state => state.getCitySlice);
  const {town} = useSelector(state => state.getTownSlice);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleTown, setModalVisibleTown] = useState(false);
  const [cityId, setCityId] = useState(1);
  const [townId, setTownId] = useState(1);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [clearAddress, setClearAddress] = useState('');

  const [currentCity, setCurrentCity] = useState({title: 'ADANA', id: '1'});
  const [currentTown, setCurrentTown] = useState({title: 'ALADAĞ', id: '1'});

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const selectCity = item => {
    setModalVisible(false);
    setCityId(item.id);
    setCurrentCity(city[item.id - 1]);
    setCurrentTown(town[0]);
  };

  const selectTown = item => {
    setModalVisibleTown(false);

    setTownId(item.id);
    setCurrentTown(item);
  };

  const saveAddress = () => {
    navigation.navigate('AddressScreen');
    dispatch(
      saveAddressAsync({
        name,
        surname,
        telephone: phone,
        email,
        city: currentCity.id,
        town: currentTown.id,
        clear_address: clearAddress,
      }),
    );
    dispatch(addressListAsync());
  };

  useEffect(() => {
    dispatch(getTownAsync({id: cityId}));
  }, [cityId, dispatch]);

  const renderCity = ({item}) => (
    <Pressable
      onPress={() => {
        selectCity(item);
      }}>
      <Text style={styles.cityCard}>{item.title}</Text>
    </Pressable>
  );

  const renderTown = ({item}) => (
    <Pressable onPress={() => selectTown(item)}>
      <Text style={styles.cityCard}>{item.title}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTop}>İletişim Bilgileri</Text>
      <View style={styles.line} />
      <TextInputCard
        name={'user'}
        width={30}
        height={30}
        stroke={Colors.primaryColor}
        placeholder={Strings.firstName}
        value={name}
        onChangeText={setName}
      />
      <TextInputCard
        name={'user'}
        width={30}
        height={30}
        stroke={Colors.primaryColor}
        placeholder={Strings.surname}
        value={surname}
        onChangeText={setSurname}
      />
      <TextInputCard
        name={'phone'}
        width={30}
        height={30}
        stroke={Colors.primaryColor}
        placeholder={Strings.phone}
        value={phone}
        onChangeText={setPhone}
      />
      <TextInputCard
        name={'phone'}
        width={30}
        height={30}
        stroke={Colors.primaryColor}
        placeholder={Strings.email}
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.bottomHeaderTitle}>
        <IconSvg name="home" width={30} height={30} />
        <Text style={styles.headerBottom}>Adres Bilgileri</Text>
      </View>
      <View style={styles.line} />
      <Text style={styles.city}>Şehir Seçin</Text>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View>
          <View style={styles.cityModal}>
            <FlatList data={city} renderItem={renderCity} />
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleTown}>
        <View style={styles.centeredView}>
          <View style={styles.cityModal}>
            <FlatList data={town} renderItem={renderTown} />
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.cityContainer}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.cityTitle}>{currentCity.title}</Text>
        <IconSvg
          name="downArrow"
          width={15}
          height={15}
          stroke={Colors.black}
        />
      </Pressable>
      <Text style={styles.city}>İlçe Seçin</Text>
      <Pressable
        style={styles.cityContainer}
        onPress={() => setModalVisibleTown(true)}>
        <Text style={styles.cityTitle}>{currentTown?.title}</Text>
        <IconSvg
          name="downArrow"
          width={15}
          height={15}
          stroke={Colors.black}
        />
      </Pressable>
      <TextInputCard
        name={'home'}
        width={30}
        height={30}
        stroke={Colors.primaryColor}
        placeholder={'Adres'}
        value={clearAddress}
        onChangeText={setClearAddress}
      />
      <TouchableOpacity style={styles.saveBtn} onPress={saveAddress}>
        <Text style={styles.saveBtnTitle}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestAdressScreen;
