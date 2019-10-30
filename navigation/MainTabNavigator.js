import React from 'react';
import { Platform } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import DrawerIcon from '../components/DrawerIcon'
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
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

const BetTracker = createDrawerNavigator(
  {
    BetTracker: BetTrackerScreen
  },
  config
);

BetTracker.navigationOptions = {
  navigationOptions: {
    header: (props) => ({
      left: DrawerIcon 
    })
  },
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

BetTracker.path = '';

const Rules = createDrawerNavigator(
  {
    Rules: RulesScreen,
  },
  config
);

Rules.navigationOptions = {
  tabBarLabel: 'Rules',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

Rules.path = '';

const Settings = createDrawerNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

Settings.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

Settings.path = '';

const mainDrawer = createDrawerNavigator({
  Home,
  UserName,
  BetTracker,
  Settings,
  Rules
})
mainDrawer.path = '';


export default mainDrawer;
