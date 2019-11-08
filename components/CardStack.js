'use strict';
import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import Styles from './Styles.js';
import Card from './Card.js';

export default class CardStack extends Component {
    state = {
        games: [],
        picks: []
    };


   componentDidMount(){
       let sport = this.props.sport
        // fetch(`http://localhost:3000/api/v1/bets/${sport}`)
        fetch(`http://localhost:3000/api/v1/bets/nfl`)
           .then(resp => resp.json())
           .then(data =>
               this.setState({
                   games: data
               })
           )
   }
   
            
    // handleRemove(i){console.log("handleRemove", i)}
    handleRemove = () => {
        let newGames = this.state.games.slice(1)
        this.setState({
            games: newGames
       })
    };

    render() {
       let cards = this.state.games.map(game => <Card info={game}key={game.id}onSwipe={this.handleRemove}/>)
        return (
            <View style={Styles.cardContainer} contentContainerStyle={Styles.cardStack}>
                {cards}
            </View>
        );
    }
}