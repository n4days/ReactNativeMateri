import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const index = props => {
  const {jumlah, namaProduk, hargaProduk} = props;
  return (
    <>
      <Text style={styles.jumlah}>{jumlah}</Text>
      <Text style={styles.namaProduk}>{namaProduk}</Text>
      <Text style={styles.hargaProduk}>
        Rp. {new Intl.NumberFormat('id-ID').format(hargaProduk * jumlah)}
      </Text>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  // css
  hargaProduk: {
    padding: 5,
    width: '45%',
    textAlign: 'right',
    fontSize: 16,
    textAlignVertical: 'center',
  },
  namaProduk: {
    width: '45%',
    padding: 5,
    textAlign: 'left',
    fontSize: 16,
    textAlignVertical: 'center',
  },
  jumlah: {
    backgroundColor: 'orange',
    borderRadius: 10,
    padding: 5,
    width: '10%',
    textAlign: 'center',
    fontSize: 16,
    textAlignVertical: 'center',
  },
});
