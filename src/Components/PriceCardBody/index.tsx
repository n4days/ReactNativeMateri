import {StyleSheet, Text} from 'react-native';
import React from 'react';

const index = props => {
  const {hargaProduk} = props;
  return (
    <Text
      style={{
        paddingBottom: 2,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
      }}>
      Rp. {hargaProduk}
    </Text>
  );
};

export default index;

const styles = StyleSheet.create({});
