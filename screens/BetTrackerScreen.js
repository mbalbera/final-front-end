import React from 'react';
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
    <ScrollView style={styles.container}>
      <Text>This will be a bet tracking screen</Text>
    </ScrollView>
  );
}

BetTrackerScreen.navigationOptions = {
  title: 'Bet Tracker',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
