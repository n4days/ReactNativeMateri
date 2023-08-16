/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const index = props => {
  const {width, height, children} = props;
  return (
    <View style={[styles.card, {width: width * 0.45, height: height * 0.3}]}>
      {children}
    </View>
  );
};

const Header = props => {
  const {children} = props;
  return <View style={styles.header}>{children}</View>;
};

const Body = props => {
  const {children} = props;
  return <View style={styles.body}>{children}</View>;
};

const Footer = props => {
  const {children} = props;
  return <View style={styles.footer}>{children}</View>;
};

index.Header = Header;
index.Body = Body;
index.Footer = Footer;

export default index;

const styles = StyleSheet.create({
  card: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 2,
  },
  header: {
    flex: 3,
  },
  body: {
    paddingTop: 10,
    flex: 1,
  },
  footer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textKategori: {
    color: '#000',
  },
  textProduk: {
    fontWeight: 'bold',
    color: '#000',
  },
});
