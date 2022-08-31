import {View, Text, Alert, Modal, Pressable, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import TextInputCard from '../../components/TextInputCard';
import Colors from '../../constants/Colors/Colors';
import Strings from '../../constants/Strings/Strings';
import styles from './AddAddressScreenStyles';
import IconSvg from '../../components/IconComponent/Icon';
import {getCityAsync, getTownAsync} from '../../api';

// global id for getting data array index
let id = 1;

const CityComponent = ({city, modalVisible, setModalVisible}) => {
  const handleCity = () => {
    // assigning city id to id
    id = city.id;
    // close modal
    setModalVisible(!modalVisible);
  };

  return (
    <Pressable onPress={handleCity}>
      <Text style={styles.cityCard}>{city.title}</Text>
    </Pressable>
  );
};

// modal for listing cities
const ModalComponent = ({modalVisible, setModalVisible}) => {
  const {city} = useSelector(state => state.getCitySlice);
  const renderCity = ({item}) => (
    <CityComponent
      city={item}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    />
  );

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View>
          <View style={styles.cityModalList}>
            <FlatList data={city} renderItem={renderCity} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text />
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const AddAddressScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [myId, setMyId] = useState(id);

  const dispatch = useDispatch();
  const {city} = useSelector(state => state.getCitySlice);

  const selectCity = () => {
    setModalVisible(true);
    setMyId(myId);
    dispatch(getCityAsync());
  };

  useEffect(() => {
    dispatch(getCityAsync());
    dispatch(getTownAsync({id}));
    console.log(myId);
  }, [dispatch, myId]);

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
      />
      <TextInputCard
        name={'user'}
        width={30}
        height={30}
        stroke={Colors.primaryColor}
        placeholder={Strings.surname}
      />
      <TextInputCard
        name={'phone'}
        width={30}
        height={30}
        stroke={Colors.primaryColor}
        placeholder={Strings.phone}
      />

      <View style={styles.bottomHeaderTitle}>
        <IconSvg name="home" width={30} height={30} />
        <Text style={styles.headerBottom}>Adres Bilgileri</Text>
      </View>
      <View style={styles.line} />
      <Text style={styles.city}>Şehir Seçin</Text>
      {/* modal başlıyor  */}
      <ModalComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {/* modal bitiyor  */}
      <Pressable style={styles.cityContainer} onPress={selectCity}>
        <Text style={styles.cityTitle}>
          {city === undefined ? '' : city[id - 1].title}
        </Text>
        <IconSvg
          name="downArrow"
          width={20}
          height={20}
          stroke={Colors.black}
        />
      </Pressable>
    </View>
  );
};

export default AddAddressScreen;

//* modal view get cities
