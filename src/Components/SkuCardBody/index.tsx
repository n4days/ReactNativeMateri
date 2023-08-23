import {StyleSheet, Text} from 'react-native';
import React from 'react';

const index = props => {
  const {skuProduk} = props;
  return (
    <Text
      style={{
        paddingBottom: 5,
        color: 'red',
        fontSize: 10,
        fontWeight: 'bold',
      }}>
      {skuProduk}
    </Text>
  );
};

export default index;

const styles = StyleSheet.create({});
