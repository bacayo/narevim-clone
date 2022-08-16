import {View, Text} from 'react-native';
import React from 'react';

const SecondCategories = props => {
  console.log(props);
  const {id} = props.route.params;
  console.log(id);

  return (
    <View>
      <Text>SecondCategories</Text>
    </View>
  );
};

export default SecondCategories;
