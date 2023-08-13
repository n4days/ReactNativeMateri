import {StyleSheet, Button} from 'react-native';
import React from 'react';

const index = props => {
  const {title, color, onPress = () => {}} = props;
  return <Button title={title} color={color} onPress={onPress} />;
};

export default index;

const styles = StyleSheet.create({});
