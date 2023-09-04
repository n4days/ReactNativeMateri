import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProductAPI, Report, AddProduk, ReportDif} from '..';
import Ion from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Product"
        component={ProductAPI}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Ion
              name={focused ? 'cart' : 'cart-outline'}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tambah Produk"
        component={AddProduk}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Ion
              name={focused ? 'add-circle' : 'add-circle-outline'}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Report Dif"
        component={ReportDif}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Ion
              name={focused ? 'calendar' : 'calendar-outline'}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Ion
              name={focused ? 'file-tray-full' : 'file-tray-full-outline'}
              size={25}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
