import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Fa from 'react-native-vector-icons/FontAwesome';

const index = props => {
  const {label, data, textDefault} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <SelectDropdown
        data={data}
        {...props}
        defaultButtonText={textDefault}
        buttonStyle={[styles.dropdown, {}]}
        buttonTextStyle={styles.dropdownBtn}
        renderDropdownIcon={isOpened => {
          return (
            <Fa
              name={isOpened ? 'chevron-up' : 'chevron-down'}
              //   color={error ? 'red' : color.success}
              size={18}
            />
          );
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdownStyle}
        rowStyle={styles.dropdownRowStyle}
        rowTextStyle={styles.dropdownRowTxtStyle}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {width: '100%', paddingBottom: 10},
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: '#3c3737',
  },
  dropdown: {
    width: '100%',
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  dropdownBtn: {
    color: 'black',
    textAlign: 'left',
    fontSize: 14,
  },
  dropdownStyle: {
    backgroundColor: '#efefef',
  },
  dropdownRowStyle: {
    backgroundColor: '#efefef',
    borderBottomColor: '#444',
  },
  dropdownRowTxtStyle: {
    color: 'black',
    textAlign: 'left',
    fontSize: 14,
  },
  error: {
    paddingTop: 8,
    fontSize: 10,
    color: 'red',
  },
});
