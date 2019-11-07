import React from 'react';
import { Platform } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import DrawerIcon from '../components/DrawerIcon'
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/GameScreen';
import UsersScreen from '../screens/UsersScreen';
import BetTrackerScreen from '../screens/BetTrackerScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RulesScreen from '../screens/RulesScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});



const UserName = createStackNavigator(
  {
    UserName: UsersScreen,
  },
  config
);

UserName.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

UserName.path = '';

const Home = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

Home.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <DrawerIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

Home.path = '';

const BetTracker = createStackNavigator(
  {
    BetTracker: BetTrackerScreen
  },
  config
);

BetTracker.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

BetTracker.path = '';

// const Game = createStackNavigator(
//   {
//     Game: GameScreen,
//   },
//   config
// );

// Game.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };

// Game.path = '';

// const BetSlip = createStackNavigator(
//   {
//     BetSlip: BetSlipScreen,
//   },
//   config
// );

// BetSlip.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };

// BetSlip.path = '';
const Rules = createStackNavigator(
  {
    Rules: RulesScreen,
  },
  config
);

Rules.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

Rules.path = '';

const Settings = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

Settings.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

Settings.path = '';

const mainDrawer = createDrawerNavigator({
  Home,
  UserName,
  BetTracker,
  Settings,
  Rules,
})
mainDrawer.path = '';


export default mainDrawer;
