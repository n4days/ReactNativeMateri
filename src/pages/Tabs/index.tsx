import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProductAPI, Report, Setting} from '..';
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
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Ion
              name={focused ? 'settings' : 'settings-outline'}
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
