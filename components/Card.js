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

class Card extends Component {
    state = {
            pan: new Animated.ValueXY()
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
                if (this.state.pan.x._value < -150) {
                    this.props.onSwipe(this.props.index)
                    console.log("swiped left")
                } else if (this.state.pan.x._value > 150) {
                    this.props.onSwipe(this.props.index)
                    console.log("swiped right")
                } else if (this.state.pan.y._value > 150) {
                    this.props.onSwipe(this.props.index)
                    console.log("swiped down")
                } else if (this.state.pan.y._value < 150) {
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

    render() {
        return (
            <Animated.View style={this.getMainCardStyle()} {...this.panResponder.panHandlers}>
                <View style={Styles.card}>
                    <Image source={require('../assets/images/sport_images/image.png').large} style={Styles.cardImage} />
                    <View style={Styles.cardText}>
                        <Text style={Styles.cardTextMain}>{`${this.props.info.home_team_abr} VS ${this.props.info.away_team_abr}` }</Text>
                        {this.props.info.kind_of_bet === "moneyline" ? (<Text>{this.props.info.home_team_abr} {this.props.info.over_home_value}</Text>) : null}
                        {this.props.info.kind_of_bet === "moneyline" ? (<Text>{this.props.info.away_team_abr} {this.props.info.under_away_value}</Text>) : null}
                        {this.props.info.kind_of_bet === "spread" ? (<Text>{this.props.info.home_team_abr} {this.props.info.home_team_spread} {this.props.info.over_home_value}</Text>) : null}
                        {this.props.info.kind_of_bet === "spread" ? (<Text>{this.props.info.away_team_abr} {this.props.info.away_team_spread} {this.props.info.under_away_value}</Text>) : null}
                        {this.props.info.kind_of_bet === "total" ? (<Text>Total: Over/Under {this.props.info.home_team_spread} </Text>) : null}
                    </View>
                </View>
            {/* <Text>Card</Text> */}
            </Animated.View>
        );
    }
}
export default Card