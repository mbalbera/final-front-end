import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import Styles from './Styles.js';
import NFL from './NFLTeamInfo'
import NHL from './NHLTeamInfo'
import NBA from './NBATeamInfo'
import NCAA from './NCAATeamInfo'
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width


export default class Card extends React.Component {

    constructor() {
        super()

        this.position = new Animated.ValueXY()
        this.state = {
            currentIndex: 0,
            homeTeamImg: "",
            awayTeamImg: "",
            homeTeamBackground: "rgb(17,17,17)",
            awayTeamBackground: "rgb(17,17,17)",
            // homeTeamSecondColor: "rgb(255,255,255)",
            // awayTeamSecondColor: "rgb(255,255,255)",
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
                else if (gestureState.dy < -120) { //UP
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
        let homeTeamImg
        let awayTeamImg
        let homeTeamBackground
        let awayTeamBackground
        // let homeTeamSecondColor
        // let awayTeamSecondColor
        console.log(this.props.sport)
        switch (this.props.sport) {
            case "nfl":
                    homeTeamImg = NFL[this.props.info.home_team_abr]["img_path"]
                    homeTeamBackground = NFL[this.props.info.home_team_abr]["background_color"]
                    awayTeamImg = NFL[this.props.info.away_team_abr]["img_path"]
                    awayTeamBackground = NFL[this.props.info.away_team_abr]["background_color"]
                    // homeTeamSecondColor = NFL[this.props.info.home_team_abr]["secondary_color"]
                    // awayTeamSecondColor = NFL[this.props.info.away_team_abr]["secondary_color"]
                break
            case "nhl":
                    homeTeamImg = NHL[this.props.info.home_team_abr]["img_path"]
                    homeTeamBackground = NHL[this.props.info.home_team_abr]["background_color"]
                    awayTeamImg = NHL[this.props.info.away_team_abr]["img_path"]
                    awayTeamBackground = NHL[this.props.info.away_team_abr]["background_color"]
                    // homeTeamSecondColor = NHL[this.props.info.home_team_abr]["secondary_color"]
                    // awayTeamSecondColor = NHL[this.props.info.away_team_abr]["secondary_color"]
                break
            case "nba":
                    homeTeamImg = NBA[this.props.info.home_team_abr]["img_path"]
                    homeTeamBackground = NBA[this.props.info.home_team_abr]["background_color"]
                    awayTeamImg = NBA[this.props.info.away_team_abr]["img_path"]
                    awayTeamBackground = NBA[this.props.info.away_team_abr]["background_color"]
                    // homeTeamSecondColor = NBA[this.props.info.home_team_abr]["secondary_color"]
                    // awayTeamSecondColor = NBA[this.props.info.away_team_abr]["secondary_color"]
                break
            case "ncaaf" || "ncaam":
                if (NCAA[this.props.info.home_team_abr]){
                    homeTeamImg = NCAA[this.props.info.home_team_abr]["img_path"] 
                    homeTeamBackground = NCAA[this.props.info.home_team_abr]["background_color"]
                    // homeTeamSecondColor = NCAA[this.props.info.home_team_abr]["secondary_color"]
                }else{
                    homeTeamImg = <View><Text>{this.props.info.home_team_name}</Text></View>
                }
                if (NCAA[this.props.info.away_team_abr]){
                    awayTeamImg = NCAA[this.props.info.away_team_abr]["img_path"]
                    awayTeamBackground = NCAA[this.props.info.away_team_abr]["background_color"]
                    // awayTeamSecondColor = NCAA[this.props.info.home_team_abr]["secondary_color"]
                }else{
                    awayTeamImg = <View><Text>{this.props.info.home_team_name}</Text></View>
                }
                break

        }
        this.setState({
            homeTeamImg: homeTeamImg,
            awayTeamImg: awayTeamImg,
            homeTeamBackground: homeTeamBackground,
            awayTeamBackground: awayTeamBackground,
            // homeTeamSecondColor: homeTeamSecondColor,
            // awayTeamSecondColor: awayTeamSecondColor
        })

    }

    displayType() {
        if (this.props.info.kind_of_bet === "moneyline") {
            return (
                <Text style={{ textAlign: 'center' }}>
                    Who will win this game?
                </Text>
            )
        } else if (this.props.info.kind_of_bet === "spread") {
            return (
                <Text style={{ textAlign: 'center' }}>
                    {this.props.info.home_team_spread > 0 ? `Will ${this.props.info.home_team_name} win by ${this.props.info.home_team_spread}?` : `Will ${this.props.info.away_team_name} win by ${this.props.info.away_team_spread}?`}
                </Text>
            )
        } else {
            return (
                <Text style={{ textAlign: 'center' }}>
                    Will both teams final score be
                </Text>
            )
        }
        // return (
        //     <Text style={{ textAlign: 'center' }}>
        //         {this.props.info.kind_of_bet.charAt(0).toUpperCase() + this.props.info.kind_of_bet.slice(1)} 
        //     </Text>
        // )
    }

    addPlus(n) {
        if (n > 0) {
            return `+${n}`
        } else {
            return `${n}`
        }

    }

    showHiddenLeft() {
        if (this.props.info.kind_of_bet === "moneyline" || this.props.info.kind_of_bet === "spread") {
            return this.props.info.home_team_abr
        } else {
            return `UNDER ${this.props.info.home_team_spread}`
        }
    }

    showHiddenRight() {
        if (this.props.info.kind_of_bet === "moneyline" || this.props.info.kind_of_bet === "spread") {
            return this.props.info.away_team_abr
        } else {
            return `OVER ${this.props.info.home_team_spread}`
        }
    }

    formatDate() {
        let hour
        let month = this.props.info.time.slice(5, 7)
        let day = this.props.info.time.slice(8, 10)
        if (parseInt(this.props.info.time.slice(11, 13)) > 17) {
            hour = parseInt(this.props.info.time.slice(11, 13)) - 17
        } else {
            hour = parseInt(this.props.info.time.slice(11, 13)) + 7
        }
        let minute = this.props.info.time.slice(14, 16)
        return (<Text style={{ textAlign: 'center' }}>{month}/{day}  {hour}:{minute} </Text>)
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
                    <Text style={{ textAlign: 'center' }}>{this.props.info.home_team_abr} {this.addPlus(this.props.info.away_team_spread)}   {this.addPlus(this.props.info.over_home_value)}</Text>
                    <Text style={{ textAlign: 'center' }}>{this.props.info.away_team_abr} {this.addPlus(this.props.info.home_team_spread)}   {this.addPlus(this.props.info.under_away_value)}</Text>
                </View>
            )
        } else {
            return (
                <View>
                    <Text style={{ textAlign: 'center' }}>Over/Under {this.props.info.home_team_spread}?</Text>
                </View>
            )
        }
    }
    displayBoldTextLeft() {
        if (this.props.info.kind_of_bet === "spread") {
            return (
                <View style={{ marginHorizontal: '5%', flexDirection: 'row', justifyContent:'flex-start'}}>
                    <Text style={{ textAlign: 'left', color:'rgb(255,255,255)', fontWeight:'bold', fontSize: 20 }}> {`${this.addPlus(this.props.info.away_team_spread)}`}</Text>
                </View>
            )
        } else if (this.props.info.kind_of_bet === "total"){
            return (
                <View style={{ marginHorizontal: '5%', flexDirection: 'row', justifyContent:'flex-start'}}>
                    <Text style={{ textAlign: 'left', color:'rgb(255,255,255)',fontWeight:'bold', fontSize: 20}}> {`Under ${this.props.info.away_team_spread}`}</Text>
                </View>
            )
        }
    }

    displayBoldTextRight() {
        if (this.props.info.kind_of_bet === "spread") {
            return (
                <View style={{ marginHorizontal: '5%', flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Text style={{ textAlign: 'right', color:'rgb(255,255,255)', fontWeight:'bold', fontSize: 20}}> {`${this.addPlus(this.props.info.home_team_spread)}`}</Text>
                </View>
            )
        } else if (this.props.info.kind_of_bet === "total") {
            return (
                <View style={{ marginHorizontal: '5%', flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Text style={{ textAlign: 'right', color:'rgb(255,255,255)', fontWeight:'bold', fontSize: 20}}> {`Over ${this.props.info.home_team_spread}`}</Text>
                </View>
            )
        }
    }

    render() {

        return (
            <Animated.View
                {...this.PanResponder.panHandlers}
                id={this.props.info.id}
                style={[this.rotateAndTranslate, {
                    height: SCREEN_HEIGHT - 437, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
                }]}>
                <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 92 }}>
                    <Text style={{ borderWidth: 1, borderColor: this.state.awayTeamBackground, color: this.state.awayTeamBackground, fontSize: 32, fontWeight: '800', padding: 10 }}>{this.showHiddenRight()}</Text>
                </Animated.View>

                <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 92 }}>
                    <Text style={{ borderWidth: 1, borderColor: this.state.homeTeamBackground, color: this.state.homeTeamBackground, fontSize: 32, fontWeight: '800', padding: 10 }}>{this.showHiddenLeft()}</Text>
                </Animated.View>
                <View style={Styles.card}>
                    <View style={Styles.cardImage}>
                        <View style={{ width: '50%', backgroundColor: this.state.homeTeamBackground }}>
                        {this.displayBoldTextLeft()}    
                            <Image source={this.state.homeTeamImg} style={Styles.teamLogo} />
                        </View>
                        <View style={{ width: '50%', backgroundColor: this.state.awayTeamBackground }}>
                        {this.displayBoldTextRight()}    
                            <Image source={this.state.awayTeamImg} style={Styles.teamLogo} />
                        </View>
                    </View>
                    <View style={Styles.cardText}>
                        <Text style={Styles.cardTextMain}>{`${this.props.info.home_team_abr} VS ${this.props.info.away_team_abr}`}</Text>
                        {this.formatDate()}
                        {this.displayType()}
                        {this.displayTeamLine()}
                    </View>
                </View>
            </Animated.View>
        )

    }

}
