'use strict';
import React, { Component } from 'react';
import {
    PanResponder,
    Animated,
    View,
    Image,
    Text
} from 'react-native';
import Styles from './Styles.js';
import NFL from './NFLTeamInfo'


class Card extends Component {
    state = {
            pan: new Animated.ValueXY(),
            homeTeamImg: "",
            awayTeamImg: ""
        };
    

    componentWillMount() {
        this.panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderGrant: (e, gestureState) => {
                this.state.pan.setValue({ x: 0, y: 0 });
            },
            onPanResponderMove: Animated.event([
                null, { dx: this.state.pan.x, dy: this.state.pan.y }
            ]),
            onPanResponderRelease: (e, { vx, vy }) => {
                console.log("swiped up/down this far: ", this.state.pan.y._value)
                console.log("swiped left/right this far: ", this.state.pan.x._value)
                if (this.state.pan.x._value < -150) {
                    this.props.onSwipe(this.props.index)
                    console.log("swiped left")
                } else if (this.state.pan.x._value > 150) {
                    this.props.onSwipe(this.props.index)
                    console.log("swiped right")
                } else if (this.state.pan.y._value > 320) {
                    this.props.onSwipe(this.props.index)
                    console.log("swiped down")
                } else if (this.state.pan.y._value < -330) {
                    this.props.onSwipe(this.props.index)
                    console.log("swiped up")
                } else {
                    Animated.spring(this.state.pan, {
                        toValue: 0,
                    }).start()
                }
            }
        });
    }

    componentWillUnmount() {
        this.state.pan.x.removeAllListeners();
        this.state.pan.y.removeAllListeners();
    }

    getImages(){
        const homeTeamImg = NFL[this.props.info.home_team_abr]["img_path"]
        const awayTeamImg = NFL[this.props.info.away_team_abr]["img_path"]
        this.setState({
            homeTeamImg: homeTeamImg,
            awayTeamImg: awayTeamImg
        })
    }

    getMainCardStyle() {
        let { pan } = this.state;
        return [
            Styles.mainCard,
            { position: 'absolute' },
            { left: -175 },
            { top: -250 },
            {
                transform: [{ translateX: pan.x }, { translateY: pan.y },
                { rotate: pan.x.interpolate({ inputRange: [-150, 0, 150], outputRange: ["-20deg", "0deg", "20deg"] }) }]
            },
            { opacity: pan.x.interpolate({ inputRange: [-150, 0, 150], outputRange: [0.5, 1, 0.5] }) }
        ];
    }

    componentDidMount(){
        debugger
        this.getImages()
    }
    
    displayType(){
        return (
            <Text style={{ textAlign: 'center' }}>
                {this.props.info.kind_of_bet.charAt(0).toUpperCase() + this.props.info.kind_of_bet.slice(1)}
            </Text>
        )
    }

    addPlus(n){
        if (n > 0 ) {
            return `+${n}` 
        } else {
            return `${n}` 
        }

    }
    displayTeamLine(){
        if (this.props.info.kind_of_bet === "moneyline"){
            return(
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}>
                    <Text style={{textAlign:'center'}}>{this.props.info.home_team_abr} {this.addPlus(this.props.info.over_home_value)}</Text>
                    <Text style={{textAlign:'center'}}>{this.props.info.away_team_abr} {this.addPlus(this.props.info.under_away_value)}</Text>
                </View>
            )
        } else if (this.props.info.kind_of_bet === "spread"){
            return(
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}>
                    <Text style={{textAlign:'center'}}>{this.props.info.home_team_abr} {this.props.info.home_team_spread} {this.props.info.over_home_value}</Text>
                    <Text style={{textAlign:'center'}}>{this.props.info.away_team_abr} {this.props.info.away_team_spread} {this.props.info.under_away_value}</Text>
                </View>
            )
        } else{
            return(
                <View>
                    <Text style={{textAlign:'center'}}>Over/Under {this.props.info.home_team_spread} Points</Text>
                </View>
                )
        }
    }

    render() {
        return (
            <Animated.View style={this.getMainCardStyle()} {...this.panResponder.panHandlers}>
                <View style={Styles.card}>
                    <View style={Styles.cardImage}>
                        
                        <View style={{width:'50%', backgroundColor: NFL[this.props.info.home_team_abr]["background_color"]}}>   
                            <Image source={this.state.homeTeamImg} style={Styles.teamLogo}/> 
                        </View>
                        <View style={{width:'50%', backgroundColor: NFL[this.props.info.away_team_abr]["background_color"]}}>
                            <Image source={this.state.awayTeamImg} style={Styles.teamLogo}/> 
                        </View>
                    </View>
                    <View style={Styles.cardText}>
                        <Text style={Styles.cardTextMain}>{`${this.props.info.home_team_abr} VS ${this.props.info.away_team_abr}` }</Text>
                        <Text></Text>
                        {this.displayType()}
                        {this.displayTeamLine()}
                    </View>
                </View>

            </Animated.View>
        );
    }
}
export default Card