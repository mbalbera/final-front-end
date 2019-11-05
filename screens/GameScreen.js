import React from 'react'
import GameCard from '../components/GameCard'
import DrawerIcon from '../components/DrawerIcon';
import { Slider, Header } from 'react-native-elements';
import { withNavigation, DrawerActions } from 'react-navigation';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder, ScrollView,Button, TouchableOpacity } from 'react-native';

function GameScreen(props){
    return(
        <View style={styles.container}>
            <Header style={styles.header}
                barStyle={'light-content'}
                leftComponent={<DrawerIcon/>}
                rightComponent={<Text style={styles.funds}>Funds: $100</Text>}
            />
            <View style={styles.mainContainer}>
                <View style={styles.gameContainer}>
                    <GameCard style={styles.pic}/>
                </View>
                <View style={styles.midContainer}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Confidence Meter</Text>
                        <Slider
                            style={styles.slider}
                            thumbTintColor='white'
                            minimumValue={0}
                            maximumValue={5}
                            minimumTrackTintColor="white"
                            maximumTrackTintColor="black"
                            value={2.5}
                            />
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button_left}><Text>Left</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button_right}><Text>Right</Text></TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={()=>console.log(props.navigation.navigate('BetSlip'))} style={styles.betslip_button}><Text>Bet Slip</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

GameScreen.navigationOptions = {
    header: null,
    title: 'Home',
    left: <DrawerIcon />
};

export default withNavigation(GameScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(53, 60, 80)',
    },

    mainContainer:{
        top: 110,
        position: "absolute",
        alignSelf: 'center',
    },

    pic: {
        zIndex:99,
        alignContent: 'center'

    },

    slider:{
        width: 200, 
        height: 40, 
        alignContent: 'center'
     
    },
    midContainer: {
        marginTop: 15,
        paddingTop: 25,
        paddingBottom: 25,
        alignItems: 'center',
    },

    gameContainer: {
        marginTop: 15,
        paddingTop: 25,
        paddingBottom: 25,
        right: 290,
        position: 'absolute'
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
        justifyContent: "space-evenly",
        position: 'absolute',
        top: 500
    },
    button_left: {
        backgroundColor: 'green',
        width: '40%',
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        textAlign: 'center'
    },
    button_right: {
        backgroundColor: 'blue',
        width: '40%',
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        textAlign: 'center'
    },
    betslip_button: {
        backgroundColor: 'orange',
        width: '100%',
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        textAlign: 'center',
        position: 'absolute',
        top: 600
    },
    logo: {
        height: 80,
        resizeMode: "center"

    },
    funds: {
        color: 'white'
    },
    header: {
        backgroundColor: 'rgb(10,106,250)'
    },
    appTitle: {
        fontSize: 36,
    }
});