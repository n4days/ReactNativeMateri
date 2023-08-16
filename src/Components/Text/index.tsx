import {StyleSheet, Text} from 'react-native';
import React from 'react';

const index = props => {
  const {category, name} = props;
  return (
    <>
      <Text style={styles.textKategori}>{category}</Text>
      <Text style={styles.textProduk}>{name}</Text>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  textKategori: {
    color: '#000',
  },
  textProduk: {
    fontWeight: 'bold',
    color: '#000',
  },
});
