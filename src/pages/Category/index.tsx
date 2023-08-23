import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Tombol, Tulisan} from '../../Components';
import {color} from '../../Constants';

const Category = ({navigation}) => {
  let nama = 'ke Jakarta';
  const [namaTombol, setNamaTombol] = useState(false);
  const [textTombol, setTextTombol] = useState('');

  useEffect(() => {
    setTextTombol(namaTombol ? 'Saya disini' : 'Saya');
  }, [namaTombol]);
  useEffect(() => {
    setTextTombol('Saya disitu');
  }, []);
  const ubahSaya = () => {
    setNamaTombol(!namaTombol);
  };
  return (
    <View style={styles.container}>
      <Tombol
        title={'Navigate to Product'}
        onPress={() => navigation.navigate('Product')}
      />
      <Tulisan></Tulisan>
      <Tombol
        color={'red'}
        title={'Flash Sale'}
        onPress={() => navigation.navigate('FlashSale')}
      />
      <Tulisan></Tulisan>
      <Tombol
        title={textTombol}
        onPress={ubahSaya}
        color={namaTombol ? '#000' : '#ccc'}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
