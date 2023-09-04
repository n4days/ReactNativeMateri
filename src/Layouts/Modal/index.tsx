import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const index = props => {
  const {children} = props;
  return (
    <View style={{backgroundColor: '#fff', height: '100%', padding: 15}}>
      <View style={{}}>{children}</View>
    </View>
  );
};

const Header = props => {
  const {children} = props;
  return <View style={{}}>{children}</View>;
};

const Body = props => {
  const {children} = props;
  return <View style={{}}>{children}</View>;
};

const Footer = props => {
  const {children} = props;
  return <View style={{}}>{children}</View>;
};

index.Header = Header;
index.Body = Body;
index.Footer = Footer;

export default index;

const styles = StyleSheet.create({});
