import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const index = props => {
  const {children} = props;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>{children}</View>
    </View>
  );
};

const Body = props => {
  const {children} = props;
  return <View style={styles.cardBody}>{children}</View>;
};

index.Body = Body;

export default index;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  cardBody: {
    padding: 5,
    flexDirection: 'row',
  },
});
