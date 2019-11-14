'use strict';
import React, { Component } from 'react';
import { View } from 'react-native';
import Styles from './Styles.js';
import Card from './Test.js'
// import Card from './Card.js';


export default class CardStack extends Component {
    state = {
        games: []
    };

   componentDidMount(){
       let sport = this.props.sport
        fetch(`http://localhost:3000/api/v1/bets/${sport}`)
        // fetch(`http://localhost:3000/api/v1/bets/nfl`) // FOR SIMULATOR
        // fetch(`https://lovely-skunk-92.localtunnel.me/api/v1/bets/nfl`)  // FOR LOCAL TUNNEL TO iOS
           .then(resp => resp.json())
           .then(data =>
               this.setState({
                   games: data
               })
           )
   }
   
    handleRemove = (direction, gameObj) => {
        if (direction === "left" || direction === "right") {
            this.props.addPick(direction, gameObj)
        }
        let updated = [...this.state.games].slice(0, this.state.games.length - 1)
        this.setState({
            games: updated
        })
    };


    render() {
       let cards = this.state.games.map(game => {
       return <Card info={game}key={game.id} sport={this.props.sport} onSwipe={this.handleRemove}/>
    })
        return (
            <View style={Styles.cardContainer} contentContainerStyle={Styles.cardStack}>
                {cards}
            </View>
        );
    }
}