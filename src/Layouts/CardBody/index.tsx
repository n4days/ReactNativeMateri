import {StyleSheet, View} from 'react-native';
import React from 'react';

const index = props => {
  const {children} = props;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>{children}</View>
    </View>
  );
};

const Header = props => {
  const {children} = props;
  return <View style={styles.cardHeader}>{children}</View>;
};

const Body = props => {
  const {children} = props;
  return <View style={styles.cardBody}>{children}</View>;
};

index.Header = Header;
index.Body = Body;

export default index;

const styles = StyleSheet.create({
  // Cardcss
  cardContainer: {
    width: '50%',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 5,
    elevation: 4,
  },
  cardHeader: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: '100%',
  },
  cardBody: {
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
});
