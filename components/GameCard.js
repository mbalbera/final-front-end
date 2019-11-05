import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const Data = [{ key: 5, img_path: require('../assets/images/sport_images/Golf.png') }, { key: 2, img_path: require('../assets/images/sport_images/basketball.png') }, { key: 3, img_path: require('../assets/images/sport_images/boxer.png') }, { key: 4, img_path: require('../assets/images/sport_images/football.png') }
    , { key: 1, img_path: require('../assets/images/sport_images/baseball.png') }, { key: 6, img_path: require('../assets/images/sport_images/hockey.png') }, { key: 8, img_path: require('../assets/images/sport_images/soccer.png') }, { key: 7, img_path: require('../assets/images/sport_images/horse.png') }, { key: 9, img_path: require('../assets/images/sport_images/TV.png') }
];

export default class GameCard extends React.Component {

    constructor() {
        super()

        this.position = new Animated.ValueXY()
        this.state = {
            currentIndex: 0
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
                    Animated.spring(this.position, {
                        toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                }
                else if (gestureState.dy < -120 ) { //UP
                    console.log("screen Height: ", SCREEN_HEIGHT)
                    console.log("position: ", this.position)

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

    renderData = () => {

        return Data.map((item, i) => {


            if (i < this.state.currentIndex) {
                return null
            }
            else if (i == this.state.currentIndex) {

                return (
                    <Animated.View
                        {...this.PanResponder.panHandlers}
                        id={item.id} item={item} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>
                        <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 1, borderColor: 'blue', color: 'blue', fontSize: 32, fontWeight: '800', padding: 10 }}>GIANTS</Text>
                        </Animated.View>

                        <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>JETS</Text>
                        </Animated.View>

                        <Image
                            style={{ flex: 1, height: 350, width: 350, resizeMode: 'center', borderRadius: 20 }}
                            source={require("../assets/images/sport_images/image.png")} />
                    </Animated.View>
                )
            }
            else {
                return (
                    <Animated.View
                        id={item.id} item={item} style={[{
                            opacity: this.nextCardOpacity,
                            transform: [{ scale: this.nextCardScale }],
                            height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
                        }]}>
                        <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>RIGHT</Text>
                        </Animated.View>

                        <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>LEFT</Text>
                        </Animated.View>

                        <Image
                            style={{ flex: 1, height: 350, width: 350, resizeMode: 'center', borderRadius: 20 }}
                            source={require("../assets/images/sport_images/image.png")} />

                    </Animated.View>
                )
            }
        }).reverse()
    }

    render() {
        return (
            // <View >
            //     <View>
            //         <Text style={{zIndex:30, paddingTop:180}}>Jets +4 (-130)  Giants -4 (+185)</Text>
            //     </View>
                <View style={{ flex: 1 }}>
                    {this.renderData()}
                </View>
            // </View>
               
        );
    }
}