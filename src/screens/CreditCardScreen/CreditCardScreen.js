import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styles from './CreditCardScreenStyles';
import Colors from '../../constants/Colors/Colors';
import {createOrderAsync} from '../../api';

const CreditCardScreen = props => {
  const {total} = useSelector(state => state.getBasketSlice);
  const dispatch = useDispatch();
  const note = props.route.params.note;

  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    dispatch(
      createOrderAsync({order_note: note, cargo_id: '1', payment_type: '0'}),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.outherContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.header}>Kart Sahibinin Adı</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.header}>Kart Numarası</Text>
          <TextInput
            style={styles.input}
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.cvvContainer}>
          <View style={styles.smallContainer}>
            <Text style={{color: Colors.black}}>Son Kullanım</Text>
            <Text style={{color: Colors.black}}>(Ay/Yıl)</Text>
            <TextInput
              style={styles.securityInput}
              value={expDate}
              onChangeText={setExpDate}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.smallContainer}>
            <Text style={{color: Colors.black}}>Güvenlik Kodu</Text>
            <Text style={{color: Colors.black}}>CVV</Text>
            <TextInput
              style={styles.securityInput}
              value={cvv}
              onChangeText={setCvv}
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>

      <View style={styles.outherContainer}>
        <Text style={styles.headerBottom}>ÖDENECEK TUTAR</Text>
        <View style={styles.line} />
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceTitle}>Net Toplam</Text>
          <Text style={styles.totalPrice}>{total} TL</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.transBtn} onPress={handlePayment}>
            <Text style={styles.transBtnTitle}>{total} TL ÖDE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreditCardScreen;
