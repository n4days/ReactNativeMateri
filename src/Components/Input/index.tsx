import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const index = props => {
  const {nama, onChangeText, numeric, placeholder, value} = props;

  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{nama}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        keyboardType={numeric ? 'numeric' : 'default'}
        placeholder={placeholder}
        value={value}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  // css
  container: {
    paddingBottom: 10,
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: '#3c3737',
  },
  input: {
    width: '100%',
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
