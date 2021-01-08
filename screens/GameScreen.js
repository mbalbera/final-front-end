import React from 'react'
import DrawerIcon from '../components/DrawerIcon';
import { Slider, Header } from 'react-native-elements';
import { withNavigation} from 'react-navigation';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CardStack from '../components/CardStack';
import BetSlipModal from '../components/BetSlipModal'
import { connect } from 'react-redux'

class GameScreen extends React.Component{
    
    state ={
        sliderShownValue: 1,
        picks: [],
        modalVisible: false,
        microMode: true,
    }

    componentDidMount() {
        this.prepState();
    }

    prepState(){
        let sv = 1
        let av = 10
        if (this.state.microMode) {
            sv = 5
            av = 50
        }
        this.setState({
            sliderShownValue: sv,
            sliderActualValue: av
        })
    }

    changeSliderValue(value){
        this.setState({
            sliderShownValue: value,
           
        }) 
    }
    addPick = (direction, gameObj) =>{
        let updated = [...this.state.picks, {game: gameObj, direction: direction, confidence: this.state.sliderShownValue}]
        this.setState({
            picks: updated,
            sliderShownValue: 5,
        })
    }

    showModal = () =>{
        const swtch = !this.state.modalVisible
        this.setState({
            modalVisible: swtch
        })
    }

    removeHandler = (betId) => {
        let updated = this.state.picks.filter(bet => bet["game"]["id"] !== betId)
        this.setState({
            picks: updated
        })
    }
    
    render(){
        return(
            <View style={styles.container}>
                <Header style={styles.header}
                    barStyle={'light-content'}
                    leftComponent={<DrawerIcon />}
                    centerComponent={this.state.microMode? "Micro" : "Macro"}
                    rightComponent={<Text style={styles.funds}>Funds: $100</Text>}
                />
                {this.state.modalVisible ? <BetSlipModal microMode={this.props.microMode} picks={this.state.picks} hideModal={this.showModal} visible={this.state.modalVisible} removeHandler={this.removeHandler}/> : null}
                <View style={styles.mainContainer}>
                
                    <View style={styles.topContainer}>
                        <View style={styles.container}>
                            <Text style={styles.title}>{this.state.microMode?'Confidence Meter:' : 'Units:' }</Text>
                            <Slider
                                style={styles.slider}
                                thumbTintColor='white'
                                minimumValue={1}
                                value={this.state.sliderShownValue}
                                maximumValue={10}
                                step={this.state.microMode ? 1 : 0.5 }
                                minimumTrackTintColor="white"
                                maximumTrackTintColor="black"
                                value={this.state.sliderShownValue}
                                onValueChange={(value) => this.changeSliderValue(value)}
                            />
                            <Text style={styles.title}>{this.state.sliderShownValue}</Text>
                        </View>
                    </View>
                    <View style={styles.gameContainer}>
                        <CardStack addPick={this.addPick} sport={this.props.sport}/>
                    </View>
                    <View style={styles.bottomContainer}>
                    {/* <View style={styles.buttonsContainerTop}>
                        <TouchableOpacity style={styles.bottomButton}>
                            <Text style={styles.betSlipText}>Swipe Left </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomButton}>
                            <Text style={styles.betSlipText}>Swipe Right</Text>
                        </TouchableOpacity>
                    </View> */}
                    
                        <View style={styles.buttonsContainerBottom}>
                            <TouchableOpacity style={styles.bottomButton}>
                                <Text style={styles.betSlipText}>Prior Bet</Text>
                            </TouchableOpacity>
                            <Text> </Text>
                            <TouchableOpacity style={styles.bottomButton}>
                                <Text style={styles.betSlipText}>Next Bet</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            <TouchableOpacity microMode={this.state.microMode} onPress={() => this.showModal()} style={styles.betslipButton}>
                                <Text style={styles.betSlipText}>Bet Slip</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

GameScreen.navigationOptions = {
    header: null,
    title: 'Home',
    left: <DrawerIcon />
};

function msp(state){
    return {
        sport: state.user.sport,
        microMode: state.user.microMode
    }
}

export default connect(msp)(withNavigation(GameScreen))

const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: 'rgb(53, 60, 80)',
    },

    bottomContainer: {
        top: '30%'
    },

    betSlipText:{
        textAlign: 'center', 
        fontSize: 18, 
        color: 'white'
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
    topContainer: {
        top: '10%',
        // marginTop: 15,
        // paddingTop: 25,
        // paddingBottom: 25,
        alignItems: 'center',
    },

    gameContainer: {
        top: '25%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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

    buttonsContainerTop: {
        // paddingTop: 10,
        top: '110%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonsContainerBottom: {
        // paddingTop: 10,
        top: '115%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    betslipButton: {
        backgroundColor: 'rgb(41,139,217)',
        width: '60%',
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        textAlign: 'center',
        top: '1100%',
        left: '20%',
        zIndex:100        
    },

    bottomButton:{
        color: 'rgb(255,255,255)',
        backgroundColor: 'rgb(41,139,217)',
        width: '40%',
        height: 40,
        borderRadius: 10,
        textAlign: 'center',   
        justifyContent: "center",
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