import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Colors from '../constants/Colors';
import TestScreen from '../screens/TestScreen';

const TabNavigator = createBottomTabNavigator(
  {
    Test: {
      screen: TestScreen,
    },
  }
);

export default createAppContainer(TabNavigator);
