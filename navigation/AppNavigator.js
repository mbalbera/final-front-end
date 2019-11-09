import React from 'react';
import GameScreen from '../screens/GameScreen';
import BetSlipScreen from '../screens/BetSlipScreen';
import { Platform } from 'react-native';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
 
  })
);
