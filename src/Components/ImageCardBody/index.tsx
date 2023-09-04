import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {stringConst} from '../../Constants';

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
          stringConst.stringUrlAPI +
          'assets/images/' +
          slugKategori +
          '/' +
          gambarProduk,
      }}
    />
  );
};

export default index;

const styles = StyleSheet.create({});
