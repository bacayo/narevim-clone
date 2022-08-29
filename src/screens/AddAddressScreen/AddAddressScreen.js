import {View, Text, Alert, Modal, Pressable, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import TextInputCard from '../../components/TextInputCard';
import Colors from '../../constants/Colors/Colors';
import Strings from '../../constants/Strings/Strings';
import styles from './AddAddressScreenStyles';
import IconSvg from '../../components/IconComponent/Icon';
import {getCityAsync} from '../../api';

let id = 1;

const CityComponent = ({city, modalVisible, setModalVisible}) => {
  const handleCity = () => {
    id = city.id;
    setModalVisible(!modalVisible);
  };

  return (
    <Pressable onPress={handleCity}>
      <Text style={{padding: 10, color: '#000'}}>{city.title}</Text>
    </Pressable>
  );
};

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
    // <View style={styles.centeredView}>
    <View style={null}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'red',
              margin: 20,
              backgroundColor: '#fff',
              justifyContent: 'center',
              // alignItems: 'center',
            }}>
            {/* <Text style={styles.modalText}>Hello World!</Text> */}
            <FlatList data={city} renderItem={renderCity} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const AddAddressScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const {city} = useSelector(state => state.getCitySlice);

  const onPress = () => {
    setModalVisible(true);
    dispatch(getCityAsync());
    console.log(id);
  };

  useEffect(() => {
    dispatch(getCityAsync());
  }, [dispatch]);

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
      <Pressable onPress={onPress}>
        <Text style={{color: Colors.black, padding: 10, marginLeft: 10}}>
          {city === undefined ? '' : city[id - 1].title}
        </Text>
      </Pressable>
    </View>
  );
};

export default AddAddressScreen;

//* modal view get cities
