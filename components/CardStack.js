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
        // console.log(this.state.games)
        return (
            <FlatList
                style={Styles.cardContainer}
                contentContainerStyle={Styles.cardStack}
                data={this.state.games}
                renderItem={({ item, index }) => (
                    <Card
                        info={item}
                        index={index}
                        onSwipe={this.handleRemove}
                    />
                )}
                keyExtractor={(item) => item.id}
                scrollEnabled={false}
            />
            // <View>
            //     <Card onSwipe={this.handleRemove}/>
            // </View>
        );
    }
}