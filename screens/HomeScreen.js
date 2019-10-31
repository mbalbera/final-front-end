import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import DrawerIcon from '../components/DrawerIcon';
import {Header} from 'react-native-elements';
import { Button, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { MonoText } from '../components/StyledText';
import Categories from '../components/Categories';
import { white } from 'ansi-colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header style={styles.header}
          leftComponent={<DrawerIcon onPress={() => this.props.navigation.openDrawer()} />}
          centerComponent={<Text style={styles.title}>Home</Text>}
          rightComponent={<Text style={styles.funds}>Funds: $100</Text>}
      />
      <View style={styles.getStartedContainer}>
          <Image style={styles.logo} source={require('../assets/images/icon.png')} />
      </View>
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <Categories/>
          <View style={styles.buttonsContainer}>     
              <Button title="Manage My Account"/>
              <Button title="Track Your Bets"/>
          </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
  title: 'Home',
  left: <DrawerIcon/>
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(53, 60, 80)',
  },
  
  getStartedContainer: {
    marginTop: 50,
    paddingTop: 15,
    alignItems: 'center',
    marginHorizontal: 50,
  },
  

  title: {
    fontSize: 27,
    color: 'rgb(225,225,225)',
    lineHeight: 27,
    textAlign: 'center',
  },
  
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  buttonsContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 50
  },
  button: {
    backgroundColor: 'transparent',
    width: '40%',
    height: 40
  },
  logo:{
    height: 80,
        resizeMode: "center"

  },
  funds:{
    color: 'white'
  },
  header:{
    backgroundColor: 'rgb(10,106,250)'
  }
});

