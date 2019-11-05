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
        bets: [
            {
                id: 0,
                team: "your pick",
                team2: "your opponent",
                risk: 'risk',
                to_win: 'to win',
                status: 'status'
            },
            {
                id: 1,
                team: "NYJ",
                team2: "NYG",
                risk: 12,
                to_win: 25,
                status: 'win'
            },
            {
                id: 2,
                team: "NJD",
                team2: "NYR",
                risk: 12,
                to_win: 25,
                status: 'win'
            }, {
                id: 3,
                team: "Bing",
                team2: "Cornell",
                risk: 12,
                to_win: 25,
                status: 'pending'
            },
            {
                id: 4,
                team: "NYM",
                team2: "WAS",
                risk: 12,
                to_win: 25,
                status: 'lose'
            },
        ]
    }

    render() {
        let mapped = this.state.bets.map(bet => <BetRow key={bet.id} bet={bet} slip={this.state.slip} removeHandler={this.removeHandler}/>)
        return (
            <View style={styles.container}>
                <Header style={styles.header}
                    barStyle={'light-content'}
                    leftComponent={<DrawerIcon {...this.props}
                    // navigation={this.this.props.navigation} 
                    />}
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

    removeHandler = (bObj)=> {
        let updated = this.state.bets.filter(bet => bet.id !== bObj.id)
        this.setState({
            bets: updated
        })
        
    }
    submitHandler = ()=> {
        console.log("submitting bets")
    }
    parlayHandler = ()=> {
        console.log("parlaying bets")
    }
}


export default withNavigation(BetSlipScreen)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
        marginVertical: 50
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
});