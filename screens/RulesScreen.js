import React from 'react';
import { withNavigation, DrawerActions } from 'react-navigation';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import DrawerIcon from '../components/DrawerIcon';
import {  Header } from 'react-native-elements';


function RulesScreen() {
    return (
        <View style={styles.container}>
            <Header 
            style={styles.header}
            barStyle={'light-content'}
            leftComponent={<DrawerIcon />}
            rightComponent={<Text style={styles.funds}>Funds: $100</Text>}
            
            />
            <ScrollView style={{paddingHorizontal: 10}}>
                <Text style={styles.title}>
                    How to play: 
                </Text>
                <Text style={styles.mainText}>
                    1. Go to your account page and set your unit. This will determine how much you will risk in total for one set of swipes.
                </Text>
                <Text style={styles.mainText}>
                    2. From HOME pick what you would like to gamble on. 
                </Text> 
                <Text style={styles.mainText}>
                    3a. On Money Line and Spread bets swipe the direction of the team you want to be on, if you like neither team swipe up or down. 
                        You also can alter the confidence meter to bet a larger or smaller percentage of your unit for the day on that specific bet.
                </Text>
                <Text style={styles.mainText}>
                    3b. On Totals (aka Over Unders) swipe up if you think the games final point total will be over the line and swipe down if you think the total will be under the line, 
                        if you aren't sure swipe up or down to pass on it.
                        You also can alter the confidence meter to bet a larger or smaller percentage of your unit for the day on that specific bet.
                </Text>
                <Text style={styles.mainText}>
                    4. When you are done swiping click bet slip to confirm or remove your bets. 
                       When you submit, your unit will be deducted from your "funds". 
                       If you win your bet you will get both what you risked and what you were set to win directly into your funds. 
                </Text>
    
                <Text style={styles.mainText}>
                    5. You can check your progress by going to the bet tracker screen.
                </Text>
    
            </ScrollView>
        </View>
    );
}

RulesScreen.navigationOptions = {
    header: null,
    title: 'Rules',
    left: <DrawerIcon />
};

export default withNavigation(RulesScreen)

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
        paddingVertical: 15
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
    logo: {
        height: 80,
        resizeMode: "center"

    },
    mainText: {
        color: 'white',
        fontSize: 18,
        paddingBottom: 8,
    },
    header: {
        backgroundColor: 'rgb(10,106,250)'
    },
    slider: {
        width: 200,
        height: 40,
        left: 110,
        zIndex: 30,

    },
    appTitle: {
        fontSize: 36,
    }
});


