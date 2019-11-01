import React from 'react'
import GameCard from '../components/GameCard'
import DrawerIcon from '../components/DrawerIcon';
import { Slider, Header } from 'react-native-elements';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder, ScrollView,Button } from 'react-native';

function GameScreen(props){
    return(
        <View style={styles.container}>
            <Header style={styles.header}
                barStyle={'light-content'}
                leftComponent={<DrawerIcon
                // navigation={this.props.navigation}
                />}
                rightComponent={<Text style={styles.funds}>Funds: $100</Text>}
            />
            <View style={styles.mainContainer}>
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
                <View style={styles.gameContainer}>
                    <GameCard style={styles.pic}/>
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

export default GameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(53, 60, 80)',
    },

    mainContainer:{
        paddingTop: 80,
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
        height: 10,
        marginTop: 15,
        paddingTop: 25,
        paddingBottom: 25,
        marginRight: 100,
        position: "absolute"
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