// import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import DrawerIcon from '../components/DrawerIcon';
import { Header } from 'react-native-elements';
import { Button, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import Categories from '../components/Categories';
import { setSport, setMicroMode } from '../actions/allActions'
import { connect } from 'react-redux'

class HomeScreen extends React.Component {
    state= {
      sliderValue: 50,
      sports: [],
      // microMode: false,
      //take following from user but for temp purposes
      unit: 50,
      maxRisk: 200, 
    }

  navigateToGame(sport){
    this.setSport(sport)
    this.navigation.navigate('Game', {sport: "beef"}) // sets redux sport to sport
  }
  onSwitch = ()=>{
    this.setMicroMode()
    // let updated = !this.state.microMode
    // this.setState({
    //   microMode: updated
    // })
  }

  // chooseMultipleSports = () => { 
  //   console.log(this.state.sports)
  // }

  setMoney =()=>{
    //POST to DB to change the users unit or spend total
  }


  render(){
    return (
      <View style={styles.container}>
      <Header style={styles.header} 
        barStyle={'light-content'}
        leftComponent={<DrawerIcon/>}
          centerComponent={<Switch value={this.state.microMode} onValueChange={() => this.onSwitch()} ios_backgroundColor={'black'} trackColor={{ true: 'red', false: 'grey' }}/>}
        rightComponent={<Text style={styles.funds}>Funds: $100</Text>}
        />
      <View style={styles.getStartedContainer}>
          <Text style={styles.appTitle}>
            {this.state.microMode ? 'MicroBets' : 'MacroBets'}
          </Text>
      </View>
      <View style={styles.container}>
          {/* <Text style={styles.title}>{this.state.microMode ? `Total Risk: $${parseFloat(this.state.maxRisk).toFixed(2)}` : `Current Unit: $${parseFloat(this.state.unit).toFixed(2)}`}</Text> */}
          <Text 
            style={styles.title}>{this.state.microMode ? `Total Risk:` : `Current Unit:`}
          </Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} keyboardType={'numeric'}>{ this.state.microMode ? `$${parseFloat(this.state.maxRisk).toFixed(2)}` : `$${parseFloat(this.state.unit).toFixed(2)}` }</TextInput>
          </View>
      </View>
        <ScrollView
            // contentContainerStyle={styles.contentContainer}
            >
            <Text style={styles.title}>Categories</Text>
            <Categories {...this.props} navigateToGame={this.navigateToGame}/>
          <View style={styles.buttonsContainer}>     
              <Button onPress={()=>this.props.navigation.navigate('UserName')} title="Manage My Account"/>
              <Button onPress={() => this.props.navigation.navigate('BetTracker')}title="Track Your Bets"/>
          </View>
          {/* <View style={styles.buttonsContainer}>
            <Button onPress={() => this.chooseMultipleSports()} title="Start" />
          </View> */}
      </ScrollView>
    </View>
  );
}
}

function msp(state) {
  return {
    microMode: state.user.microMode
  }
}
HomeScreen.navigationOptions = {
  header: null,
  title: 'Home',
  left: <DrawerIcon/>
};

export default connect(msp, { setSport, setMicroMode } )(withNavigation(HomeScreen))


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
    color: 'rgb(211,215,225)',
    lineHeight: 27,
    textAlign: 'center',
  },
  
  input: {
    display:'flex',
    color: 'rgb(17,17,17)',
    fontSize: 22,
    // color: 'rgb(211,215,225)',
    lineHeight: 27,
    textAlign: 'center',
    justifyContent: 'space-evenly',
    // paddingHorizontal: '5%',
    margin:'auto',
    backgroundColor: 'rgb(191,195,205)', 
    // backgroundColor: 'rgb(41,139,217)', 
    // borderWidth: 2,
    // borderColor: 'rgb(41,139,217)'

  },
  inputContainer: {
    alignItems: 'center',
    // display:'flex',
    // width: '40%',
  },
  spaceFiller:{
    width: '30%',
    backgroundColor: 'rgb(53,60,79)',
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
    color: 'rgb(211,215,225)'
  }
});

