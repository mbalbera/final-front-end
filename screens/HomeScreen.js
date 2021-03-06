import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import DrawerIcon from '../components/DrawerIcon';
import { Slider, Header } from 'react-native-elements';
import { Button, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { withNavigation, DrawerActions } from 'react-navigation';
import { MonoText } from '../components/StyledText';
import Categories from '../components/Categories';
import { white } from 'ansi-colors';

class HomeScreen extends React.Component {
    state= {
      sliderValue: 50
    }

  render(){

    return (
      <View style={styles.container}>
      <Header style={styles.header} 
        barStyle={'light-content'}
        leftComponent={<DrawerIcon {...this.props}
        // navigation={this.this.props.navigation} 
        />}
        rightComponent={<Text style={styles.funds}>Funds: $100</Text>}
        />
      <View style={styles.getStartedContainer}>
          <Text style={styles.appTitle}>MicroBets™</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{`Current Unit:`}</Text>
        <Text style={styles.title}>{`$${Math.floor(this.state.sliderValue)}`}</Text>
      </View>
        <ScrollView
            // contentContainerStyle={styles.contentContainer}
            >
            <Text style={styles.title}>Categories</Text>
            <Categories {...this.props}/>
          <View style={styles.buttonsContainer}>     
              <Button onPress={()=>this.props.navigation.navigate('UserName')} title="Manage My Account"/>
              <Button onPress={() => this.props.navigation.navigate('BetTracker')}title="Track Your Bets"/>
          </View>
      </ScrollView>
    </View>
  );
}
}

HomeScreen.navigationOptions = {
  header: null,
  title: 'Home',
  left: <DrawerIcon/>
};

export default withNavigation(HomeScreen)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(53, 60, 80)',
    alignContent: "center",
    paddingBottom: 5
  },
  
  getStartedContainer: {
    marginTop: 15,
    paddingTop: 25,
    paddingBottom: 25,
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
  },
  slider: {
    width: 200,
    height: 40,
    left: 110,
    zIndex: 30,

  },
  appTitle:{
    fontSize: 36,
  }
});

