import {
  View,
  Text,
  Pressable,
  Modal,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import styles from './PaymentMethodScreenStyles';
import IconSvg from '../../components/IconComponent/Icon';
import {cargoListAsync, discountCouponAsync} from '../../api';
import StringScreens from '../../constants/Strings/StringScreens';

const PaymentMethod = ({payment, onPress}) => {
  return (
    <Pressable style={styles.paymentTitleContainer} onPress={onPress}>
      <Text style={styles.paymentTitle}>{payment.title}</Text>
    </Pressable>
  );
};

const PaymentMethodScreen = () => {
  const [currentMethod, setCurrentMethod] = useState({
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Kredi Kartı',
  });

  const [currentCargo, setCurrentCargo] = useState('UPS KARGO');
  const [discount, setDiscount] = useState('');
  const [note, setNote] = useState('');

  const [modalVisiblePayment, setModalVisiblePayment] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const PAYMENT_METHOD_DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Kredi Kartı',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Kapıda Ödeme',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Havale / EFT',
    },
  ];

  const hideModal = item => {
    setModalVisiblePayment(!modalVisiblePayment);
    setCurrentMethod(item);
  };

  const renderPaymentMethod = ({item}) => (
    <PaymentMethod payment={item} onPress={() => hideModal(item)} />
  );

  const handlePaymentMethod = () => {
    setModalVisiblePayment(true);
  };

  const handleDiscount = () => {
    dispatch(discountCouponAsync({discount: discount}));
  };

  const navigateCreditCard = () => {
    navigation.navigate(StringScreens.creditCardScreen, {note});
  };

  useEffect(() => {
    dispatch(cargoListAsync());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisiblePayment}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList
              data={PAYMENT_METHOD_DATA}
              renderItem={renderPaymentMethod}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Ödeme Yöntemini Seçin:</Text>
        <Pressable style={styles.inputContainer} onPress={handlePaymentMethod}>
          <Text style={styles.currentMethodTitle}>{currentMethod.title}</Text>
          <IconSvg name="downArrow" width={16} height={16} />
        </Pressable>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Ödeme Yöntemini Seçin:</Text>
        <Pressable style={styles.inputContainer}>
          <Text style={styles.currentMethodTitle}>UPS KARGO</Text>
          <IconSvg name="downArrow" width={16} height={16} />
        </Pressable>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Kupon Kodu Ekle:</Text>
        <View style={styles.couponContainer}>
          <TextInput
            placeholder="Kupon Kodu"
            style={styles.couponInput}
            value={discount}
            onChangeText={setDiscount}
          />
          <TouchableOpacity style={styles.couponBtn} onPress={handleDiscount}>
            <Text style={styles.couponBtnTitle}>Uygula</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Eklemek istediğiniz not var mı?</Text>
        <View style={styles.couponContainer}>
          <TextInput
            placeholder="Not"
            style={styles.couponInput}
            value={note}
            onChangeText={setNote}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.payBtn} onPress={navigateCreditCard}>
        <Text style={styles.payBtnTitle}>Ödeme Ekranı</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethodScreen;
