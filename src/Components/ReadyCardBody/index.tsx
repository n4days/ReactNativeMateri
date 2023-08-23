import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const index = props => {
  const {isReadyProduk} = props;
  return (
    <Text
      style={[
        isReadyProduk == 1 ? {color: 'green'} : {color: 'red'},
        {paddingBottom: 5, fontSize: 14},
      ]}>
      {isReadyProduk == 1 ? 'Tersedia' : 'Habis'}
    </Text>
  );
};

export default index;

const styles = StyleSheet.create({});
