import { Notifications } from 'expo';
import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

import LoginScreen from './../screens/auth/LoginScreen';
import SignupScreen from './../screens/auth/SignupScreen';
import ForgotPasswordScreen from './../screens/auth/ForgotPasswordScreen';

const RootStackNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    ForgotPassword: { screen: ForgotPasswordScreen },

    Main: { screen: MainTabNavigator, },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default createAppContainer(RootStackNavigator);
