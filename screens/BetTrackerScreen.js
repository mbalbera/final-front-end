import React from 'react';
import DrawerIcon from '../components/DrawerIcon';
import { Header } from 'react-native-elements';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function BetTrackerScreen() {
  return (
    <View>
      <Header style={styles.header}
        leftComponent={<DrawerIcon />}
        centerComponent={<Text style={styles.title}>Bet Tracker</Text>}
        rightComponent={<Text style={styles.funds}>Funds: $100</Text>}
      />
    <ScrollView style={styles.container}>
      
      <Text>This will be a bet tracking screen</Text>
    </ScrollView>
    </View>
  );
}

BetTrackerScreen.navigationOptions = {
  title: 'Bet Tracker',
  left: <DrawerIcon />
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    marginVertical: 50
  },
});