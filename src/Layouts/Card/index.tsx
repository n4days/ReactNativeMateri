import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const index = props => {
  const {img, category, name, width, height, children} = props;
  return (
    <View style={[styles.card, {width: width * 0.45, height: height * 0.3}]}>
      <View style={styles.header}>
        <Image source={{uri: img}} style={styles.image} />
      </View>
      <View style={styles.body}>
        <Text style={styles.textKategori}>{category}</Text>
        <Text style={styles.textProduk}>{name}</Text>
      </View>
      <View style={styles.footer}>{children}</View>
    </View>
  );
};

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
