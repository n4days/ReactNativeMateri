import {StyleSheet, Text} from 'react-native';
import React from 'react';

const index = props => {
  const {namaProduk} = props;
  return (
    <Text
      style={{
        paddingBottom: 5,
        color: 'black',
        opacity: 0.5,
        textTransform: 'uppercase',
        fontSize: 16,
      }}>
      {namaProduk}
    </Text>
  );
};

export default index;

const styles = StyleSheet.create({});
