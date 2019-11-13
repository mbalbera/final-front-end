import React from 'react';
import { withNavigation, DrawerActions } from 'react-navigation';
import DrawerIcon from '../components/DrawerIcon';
import { Header } from 'react-native-elements';
import BetRow from '../components/BetRow'
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    Button,
    View,
} from 'react-native';

class BetSlipScreen extends React.Component {

    state = {
        slip: true,
        bets: [],
        modalVisible: true
    }
    componentDidMount(){

        let updated = [...this.props.picks]
        this.setState({
            bets: updated
        })
    }
    render() {
        // console.log(this.props)
        let mapped = this.state.bets.map(bet => <BetRow key={bet.id} bet={bet} slip={this.state.slip} removeHandler={this.removeHandler} />)
        return (
            <View style={styles.container}>
                <Header style={styles.header}
                    barStyle={'light-content'}
                    leftComponent={<DrawerIcon />}
                    rightComponent={<Text style={styles.funds}>Funds: $100</Text>}
                />
                <ScrollView style={styles.container}>
                    {mapped}
                </ScrollView>
                <View style={styles.buttonsContainer}>
                    <Button style={styles.button} title="Submit" />
                    <Button style={styles.button} title="Parlay it" />
                </View>
            </View>
        )
    }
    removeHandler = (bObj) => {
        let updated = this.state.bets.filter(bet => bet.id !== bObj.id)
        this.setState({
            bets: updated
        })

    }
    submitHandler = () => {
        console.log("submitting bets")
    }
    parlayHandler = () => {
        console.log("parlaying bets")
    }
}

BetSlipScreen.navigationOptions = {
    header: null,
    title: 'Home',
    left: <DrawerIcon />
};

export default withNavigation(BetSlipScreen)

const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: 'rgb(53, 60, 80)',
    },

    mainContainer: {
        top: 110,
        position: "absolute",
        alignSelf: 'center',
    },

    pic: {
        zIndex: 99,
        alignContent: 'center'

    },

    slider: {
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

        left: '50%',
        top: '130%',
        zIndex: 88
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

    betslip_button: {
        backgroundColor: 'rgb(41,139,217)',
        width: '60%',
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        textAlign: 'center',
        top: '1200%',
        left: '20%'

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