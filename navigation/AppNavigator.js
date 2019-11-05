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

const Game = createStackNavigator(
  {
    Game: GameScreen,
  },
  config
);

Game.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

Game.path = '';

const BetSlip = createStackNavigator(
  {
    BetSlip: BetSlipScreen,
  },
  config
);

BetSlip.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

BetSlip.path = '';

export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
    Game: Game,
    BetSlip: BetSlip
  })
);
