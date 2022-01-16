// import * as WebBrowser from 'expo-web-browser';
import React, {useState, useEffect} from 'react';
import DrawerIcon from '../components/DrawerIcon';
import { Header } from 'react-native-elements';
import { Button, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import Categories from '../components/Categories';
import { useRecoilState, useRecoilValue } from 'recoil';
import { microModeState } from '../recoil/generalAtom'


function HomeScreen(props){  
  
  const [microMode, setMicroMode] = useRecoilState(microModeState);

  const [stepOne, setStepOne] = useState(false);
  const [sliderValue, setSliderValue] = useState(50)
  const [sports, setSports] = useState('')
  const [unit, setUnit] = useState(50)
  const [maxRisk, setMaxRisk] = useState(200)

  function navigateToGame(sport){
    // setSport(sport)
    this.navigation.navigate('Game', {sport}) 
  }

  const setMoney = ()=>{
    //POST to DB to change the users unit or spend total
  }

  const chooseMode = (mode)=>{
    setStepOne(true)
    setMicroMode(mode)
  }

  const goBackToMode =()=>{
    setStepOne(false)
  }

  const colors = {
    micro: 'rgb(53,60,79)',
    macro: 'rgb(50,50,50)',
  } 

      return (
        <View style={styles.container}>
        <Header backgroundColor={microMode ? colors.micro : colors.macro} style={styles.header} 
          barStyle={'light-content'}
          leftComponent={<DrawerIcon/>}
            // centerComponent={<Switch value={microMode} onValueChange={() => setMicroMode(!microMode)} ios_backgroundColor={colors.micro} trackColor={{ true: colors.macro, false: colors.micro }}/>}
          rightComponent={<Text style={styles.funds}>Funds: $100</Text>}
          />
        <View style={styles.getStartedContainer}>
            <Text style={styles.appTitle}>
              {microMode ? 'MicroBets' : 'MacroBets'}
            </Text>
        </View>
        <View style={styles.container}>
            {/* <Text style={styles.title}>{microMode ? `Total Risk: $${parseFloat(maxRisk).toFixed(2)}` : `Current Unit: $${parseFloat(unit).toFixed(2)}`}</Text> */}
            <Text 
              style={styles.title}>{microMode ? `Total Risk:` : `Current Unit:`}
            </Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} keyboardType={'numeric'}>{ microMode ? `$${parseFloat(maxRisk).toFixed(2)}` : `$${parseFloat(unit).toFixed(2)}` }</TextInput>
            </View>
        </View>
          <ScrollView
              // contentContainerStyle={styles.contentContainer}
              >
              {/* <Text style={styles.title}>Leagues</Text> */}
              <Categories {...props} navigateToGame={navigateToGame}/>
            <View style={styles.buttonsContainer}>     
                <Button color={'rgb(255,255,255)'} onPress={()=>props.navigation.navigate('UserName')} title="Manage My Account"/>
                <Button color={'rgb(255,255,255)'} onPress={() => props.navigation.navigate('BetTracker')}title="Track Your Bets"/>
            </View>
            {/* <View style={styles.buttonsContainer}>
              <Button onPress={() => this.chooseMultipleSports()} title="Start" />
            </View> */}
        </ScrollView>
      </View>
    );
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
    // paddingTop: 25,
    paddingBottom: 25,
    alignItems: 'center',
    marginHorizontal: 50,
  },

  majorBox: {
    marginTop: 15,
    display:'flex',
    // paddingTop: 25,
    paddingBottom: 25,
    alignItems: 'center',
    justifyContent:'center',
    marginHorizontal: 50,
    borderWidth: 5,
    borderRadius:9,
    height: '30%'
  },

  majorText:{
    marginTop: 20,
    fontSize: 30,
    color: 'rgb(255,255,255)',
    margin:0,
  },

  title: {
    fontSize: 27,
    color: 'rgb(255,255,255)',
    lineHeight: 27,
    textAlign: 'center',
  },
  
  input: {
    display:'flex',
    color: 'rgb(191,195,205)',
    fontWeight:'bold',
    fontSize: 22,
    // color: 'rgb(255,255,255)',
    lineHeight: 27,
    textAlign: 'center',
    justifyContent: 'space-evenly',
    // paddingHorizontal: '5%',
    margin:'auto',
    borderWidth:2,
    borderBottomColor: 'rgb(191,195,205)', 
    borderTopColor: 'rgba(191,195,205,0.0)', 
    borderLeftColor: 'rgba(191,195,205,0.0)', 
    borderRightColor: 'rgba(191,195,205,0.0)', 
    // backgroundColor: 'rgb(41,139,217)', 
    // borderWidth: 2,
    // borderColor: 'rgb(41,139,217)'

  },
  inputContainer: {
    marginTop:25,
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
    color: 'rgb(17,17,17)'
  },
  slider: {
    width: 200,
    height: 40,
    left: 110,
    zIndex: 30,

  },
  appTitle:{
    fontSize: 36,
    color: 'rgb(255,255,255)'
  }
});

