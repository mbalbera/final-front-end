import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {StyleSheet, Text, View } from 'react-native';
import DrawerIcon from '../components/DrawerIcon';
import { Header } from 'react-native-elements';
import { withNavigation, DrawerActions } from 'react-navigation';


function SettingsScreen() {
  return (
  <View>
    <Header style={styles.header}
      leftComponent={<DrawerIcon />}
      centerComponent={<Text style={styles.title}>Settings</Text>}
      rightComponent={<Text style={styles.funds}>Funds: $100</Text>}
    />
  </View>
  
  )
}

SettingsScreen.navigationOptions = {
  header: null,
  title: 'settings',
  left: <DrawerIcon />
};

export default withNavigation(SettingsScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 50
  }
});
