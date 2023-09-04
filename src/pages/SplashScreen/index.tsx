import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {logoles, splashscreen} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Tabs');
    }, 3000);
  });
  return (
    <ImageBackground source={splashscreen} style={styles.container}>
      <View style={styles.overlay}>
        <Image source={logoles} style={styles.image} />
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  // css
  container: {
    flex: 1,
  },
  image: {
    width: 120,
    height: 120,
  },
  overlay: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
