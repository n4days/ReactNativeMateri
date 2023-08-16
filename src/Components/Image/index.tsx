import {StyleSheet, Image} from 'react-native';
import React from 'react';

const index = props => {
  const {img} = props;
  return <Image source={{uri: img}} style={styles.image} />;
};

export default index;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
