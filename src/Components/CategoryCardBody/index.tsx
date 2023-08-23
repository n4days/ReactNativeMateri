import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ion from 'react-native-vector-icons/Ionicons';

const index = props => {
  const {namaKategori} = props;
  return (
    <View style={styles.innerCardBody}>
      <Ion
        style={{paddingBottom: 2}}
        name="fast-food"
        size={16}
        color="purple"
      />
      <Text
        style={{
          paddingBottom: 2,
          color: 'black',
          opacity: 0.5,
          fontSize: 14,
        }}>
        {' '}
        {namaKategori}
      </Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  innerCardBody: {
    width: '100%',
    flexDirection: 'row',
  },
});
