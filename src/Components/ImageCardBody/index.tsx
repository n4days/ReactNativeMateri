import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

const index = props => {
  const {slugKategori, gambarProduk} = props;
  return (
    <Image
      style={{
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 180,
        width: '100%',
      }}
      source={{
        uri:
          'http://192.168.1.23/backend-kasir/public/assets/images/' +
          slugKategori +
          '/' +
          gambarProduk,
      }}
    />
  );
};

export default index;

const styles = StyleSheet.create({});
