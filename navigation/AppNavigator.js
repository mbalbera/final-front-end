import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

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
