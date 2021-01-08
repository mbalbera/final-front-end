import React from 'react';
import { withNavigation, DrawerActions } from 'react-navigation';
import DrawerIcon from '../components/DrawerIcon';
import { Header } from 'react-native-elements';
import BetRow from '../components/BetRow'
import {
    // Image,
    // Platform,
    ScrollView,
    StyleSheet,
    Text,
    // TouchableOpacity,
    Button,
    View,
    Modal,
} from 'react-native';

class BetSlipModal extends React.Component {

    state = {
        slip: true,
        bets: [],
        totalConfidence: 0,
        toggle: true
    }
    componentDidMount() {
        // let updated = [...this.props.picks]
        let tc = 0
        this.props.picks.forEach(function (bet) {
            tc = tc + bet["confidence"]
        })
        this.setState({
            // bets: updated,
            totalConfidence: tc
        })
    }
    componentDidUpdate(prevProps){
        
        if(prevProps.picks.length !== this.props.picks.length){
            let tc = 0
            this.props.picks.forEach(function (bet) {
                tc = tc + bet["confidence"]
            })
            this.setState({
                // bets: updated,
                totalConfidence: tc
            })
        }
    }
    render() {
        let mapped = this.props.picks.map((bet, index) => <BetRow key={bet.id} bet={bet} totalConfidence={this.state.totalConfidence} index={index} slip={this.state.slip} removeHandler={this.props.removeHandler} microMode={this.props.microMode} />)
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => { Alert.alert('Modal has been closed.') }}
            >
                <View style={styles.container}>
                    <Header style={styles.header}
                        barStyle={'light-content'}
                        centerComponent={<Text style={{color:'white', fontSize:22}}>Betslip</Text>}
                        rightComponent={<Text style={styles.funds}>Funds: $100</Text>}
                    />
                    <View style={styles.container}>
                        <View style={styles.heading} >
                            <View style={styles.splitContainer}>
                                <Text style={styles.headingText}>Your Pick</Text>
                                <Text style={styles.headingText}>Opponent</Text>
                                <Text style={styles.headingText}>Risk</Text>
                                <Text style={styles.headingText}>To win</Text>
                                <Text style={styles.headingText}>Remove</Text>
                            </View>
                        </View>
                        <ScrollView style={{paddingTop: 50, zIndex: -2}}>
                        {mapped}
                        </ScrollView>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Button style={styles.button} title="Submit" />
                        <Button style={styles.button} title="Keep Swiping" 
                        onPress={() => this.props.hideModal()} 
                        />
                        <Button style={styles.button} title="Parlay it" />
                    </View>
                </View>
            </Modal>
        )
    }
    submitHandler = () => {
        console.log("submitting bets")
    }
    parlayHandler = () => {
        console.log("parlaying bets")
    }
}

BetSlipModal.navigationOptions = {
    header: null,
    title: 'Home',
    left: <DrawerIcon />
};

export default withNavigation(BetSlipModal)

const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: 'rgb(53, 60, 80)',
    },

    headingText:{
        height: 50,
        backgroundColor: 'lightgrey',
        width: '20%',
        textAlign: 'center'
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

    splitContainer:{
        flex: 1,
        flexDirection: 'row',
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