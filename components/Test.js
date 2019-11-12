import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import Styles from './Styles.js';
import NFL from './NFLTeamInfo'
import { onSessionWasInterrupted } from 'expo/build/AR';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width


export default class Card extends React.Component {

    constructor() {
        super()

        this.position = new Animated.ValueXY()
        this.state = {
            currentIndex: 0,
            homeTeamImg: "",
            awayTeamImg: ""
        }

        this.rotate = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: ['-30deg', '0deg', '10deg'],
            extrapolate: 'clamp'
        })

        this.rotateAndTranslate = {
            transform: [{
                rotate: this.rotate
            },
            ...this.position.getTranslateTransform()
            ]
        }

        this.likeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [0, 0, 1],
            extrapolate: 'clamp'
        })
        this.dislikeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 0],
            extrapolate: 'clamp'
        })

        this.nextCardOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp'
        })
        this.nextCardScale = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0.8, 1],
            extrapolate: 'clamp'
        })

    }
  


    componentWillMount() {
        this.PanResponder = PanResponder.create({

            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {

                this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
            },
            onPanResponderRelease: (evt, gestureState) => {

                if (gestureState.dx > 120) { //RIGHT
                    console.log("swiped right")
                    this.props.onSwipe("right", this.props.info)
                    Animated.spring(this.position, {
                        toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                    
                }
                else if (gestureState.dx < -120) { //LEFT
                    console.log("swiped left")
                    this.props.onSwipe("left", this.props.info)
                    Animated.spring(this.position, {
                        toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                }
                else if (gestureState.dy < -120 ) { //UP
                    console.log("swiped up")
                    this.props.onSwipe("up", this.props.info)
                    Animated.spring(this.position, {
                        toValue: { x: gestureState.dx, y: -SCREEN_HEIGHT - 100 }
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                }
                else if (gestureState.dy > 120) { //DOWN
                    console.log("swiped down")
                    this.props.onSwipe("down", this.props.info)
                    Animated.spring(this.position, {
                        toValue: { x: gestureState.dx, y: SCREEN_HEIGHT + 100 }
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                }
                else {
                    Animated.spring(this.position, {
                        toValue: { x: 0, y: 0 },
                        friction: 4
                    }).start()
                }
            }
        })
    }
    componentDidMount() {
        this.getImages()
    }

    getImages() {
        const homeTeamImg = NFL[this.props.info.home_team_abr]["img_path"]
        const awayTeamImg = NFL[this.props.info.away_team_abr]["img_path"]
        this.setState({
            homeTeamImg: homeTeamImg,
            awayTeamImg: awayTeamImg
        })
    }

    displayType() {
        return (
            <Text style={{ textAlign: 'center' }}>
                {this.props.info.kind_of_bet.charAt(0).toUpperCase() + this.props.info.kind_of_bet.slice(1)}
            </Text>
        )
    }

    addPlus(n) {
        if (n > 0) {
            return `+${n}`
        } else {
            return `${n}`
        }

    }

    showHiddenLeft(){
        if (this.props.info.kind_of_bet === "moneyline"){
            return this.props.info.home_team_abr
        } else if (this.props.info.kind_of_bet === "spread"){
            return  `${this.props.info.home_team_abr} ${this.props.info.home_team_spread}`
        } else{
            return `UNDER ${this.props.info.home_team_spread}`
        }
    }

    showHiddenRightt(){
        if (this.props.info.kind_of_bet === "moneyline"){
            return this.props.info.away_team_abr
        } else if (this.props.info.kind_of_bet === "spread"){
            return `${this.props.info.away_team_abr} ${this.props.info.away_team_spread}`
        } else{
            return `OVER`
            //  this.props.info.home_team_spread}
        }
    }

    displayTeamLine() {
        if (this.props.info.kind_of_bet === "moneyline") {
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ textAlign: 'center' }}>{this.props.info.home_team_abr} {this.addPlus(this.props.info.over_home_value)}</Text>
                    <Text style={{ textAlign: 'center' }}>{this.props.info.away_team_abr} {this.addPlus(this.props.info.under_away_value)}</Text>
                </View>
            )
        } else if (this.props.info.kind_of_bet === "spread") {
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                    <Text style={{ textAlign: 'center' }}>{this.props.info.home_team_abr} {this.props.info.home_team_spread} {this.props.info.over_home_value}</Text>
                    <Text style={{ textAlign: 'center' }}>{this.props.info.away_team_abr} {this.props.info.away_team_spread} {this.props.info.under_away_value}</Text>
                </View>
            )
        } else {
            return (
                <View>
                    <Text style={{ textAlign: 'center' }}>Over/Under {this.props.info.home_team_spread} Points</Text>
                </View>
            )
        }
    }

    render (){
                return (
                    <Animated.View 
                        {...this.PanResponder.panHandlers}
                        id={this.props.info.id}  
                        style={[this.rotateAndTranslate, { 
                            height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute' 
                            }]}>
                        <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 1, borderColor: 'blue', color: 'blue', fontSize: 32, fontWeight: '800', padding: 10 }}>GIANTS</Text>
                        </Animated.View>

                        <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>{this.showHiddenLeft}</Text>
                        </Animated.View>
                        <View style={Styles.card}>
                            <View style={Styles.cardImage}>
                                <View style={{ width: '50%', backgroundColor: NFL[this.props.info.home_team_abr]["background_color"] }}>
                                    <Image source={this.state.homeTeamImg} style={Styles.teamLogo} />
                                </View>
                                <View style={{ width: '50%', backgroundColor: NFL[this.props.info.away_team_abr]["background_color"] }}>
                                    <Image source={this.state.awayTeamImg} style={Styles.teamLogo} />
                                </View>
                            </View>
                            <View style={Styles.cardText}>
                                <Text style={Styles.cardTextMain}>{`${this.props.info.home_team_abr} VS ${this.props.info.away_team_abr}`}</Text>
                                <Text></Text>
                                {this.displayType()}
                                {this.displayTeamLine()}
                            </View>
                        </View>
                    </Animated.View>
                )
     
    }

}
