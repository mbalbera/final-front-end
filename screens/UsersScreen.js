import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import DrawerIcon from '../components/DrawerIcon';
import { Header } from 'react-native-elements';

// import Categories from '../components/Categories'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function UsersScreen() {
  return (
    <View style={styles.container}>
      <Header style={styles.header}
        leftComponent={<DrawerIcon />}
        centerComponent={<Text style={styles.title}>User Name</Text>}
        rightComponent={<Text style={styles.funds}>Funds: $100</Text>}
      />
        <Text>This will be a users Screen</Text>
        {/* <Categories /> */}
    </View>
  );
}

UsersScreen.navigationOptions = {
  header: null,
  left: <DrawerIcon />
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 50
  }
});
