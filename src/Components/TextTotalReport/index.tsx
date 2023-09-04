import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const index = props => {
  const {total} = props;
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text>Total</Text>
        <Text style={styles.total}>
          Rp. {new Intl.NumberFormat('id-ID').format(total)}
        </Text>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  // css
  total: {fontSize: 16},
  inner: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
});
