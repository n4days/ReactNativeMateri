import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const index = props => {
  const {width, height} = props;
  return (
    <View
      style={[styles.card, {width: width * 0.45, height: height * 0.3}]}></View>
  );
};

export default index;

const styles = StyleSheet.create({
  card: {
    padding: 5,
    margin: 2,
  },
});
