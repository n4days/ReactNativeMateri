import {StyleSheet, Text, View} from 'react-native';
import Fa from 'react-native-vector-icons/FontAwesome';
import React from 'react';

const Icon = () => {
  return (
    <View>
      <Fa name="facebook" size={30} color="black" />
      {/* <Text>index</Text> */}
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({});
