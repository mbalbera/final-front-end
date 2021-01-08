import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'


function renderPick(props){
    if (props.bet.game.kind_of_bet === "total"){
        if (props.bet.direction === "left"){
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>Over {props.bet.game.home_team_spread}</Text>
                    <Text style={styles.text}>{props.bet.game.home_team_abr}/{props.bet.game.away_team_abr}</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>Under {props.bet.game.home_team_spread}</Text>
                    <Text style={styles.text}>{props.bet.game.home_team_abr}/{props.bet.game.away_team_abr}</Text>
                </View>
            )        
        }
    } else if (props.bet.game.kind_of_bet === "moneyline"){
        if (props.bet.direction === "left"){
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>{props.bet.game.home_team_abr}</Text>
                    <Text style={styles.text}>{props.bet.game.away_team_abr}</Text>
                </View>
        )} else{
            return(
                <View style={styles.container}>
                    <Text style={styles.text}>{props.bet.game.home_team_abr}</Text>
                    <Text style={styles.text}>{props.bet.game.away_team_abr}</Text>
                </View>
        )}
    } else{ //SPREAD
        if (props.bet.direction === "left") {
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>{props.bet.game.home_team_spread > 0 ? `${props.bet.game.home_team_abr} +${props.bet.game.home_team_spread}` : `${props.bet.game.home_team_abr} ${props.bet.game.home_team_spread}`}</Text>
                    <Text style={styles.text}>{props.bet.game.away_team_abr}</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>{props.bet.game.away_team_spread > 0 ? `${props.bet.game.away_team_abr} +${props.bet.game.away_team_spread}` : `${props.bet.game.away_team_abr} ${props.bet.game.away_team_spread}`}</Text>
                    <Text style={styles.text}>{props.bet.game.home_team_abr}</Text>
                </View>
            )
        }
    }
}

function backgrounder(id){
    if (id % 2 === 0){
        return 'grey'
    } else{
        return 'darkgrey'
    }
}

function renderRiskWin(props){
    console.log("renderriskwinprops", props)
    let line
    let win
    let risk
    if (!props.microMode){
        //MICRO
        risk = (props.bet.confidence / props.totalConfidence) * 200 // replace 50 with user input of days spending
    } else{
        //MACRO
        risk = props.bet.confidence * 50 // bet.confidence = units  replace 50 with user unit 
    }
    if (props.bet.direction === "left" && props.bet.game.kind_of_bet !== "total" || props.bet.direction === "right" && props.bet.game.kind_of_bet === "total"){
         line = props.bet.game.over_home_value
    }else{
         line = props.bet.game.under_away_value
    }
    if (line > 0){
         win = (risk * parseInt(line))/100
    }else{
        win = (risk * 100) / Math.abs(parseInt(line))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{parseFloat(risk).toFixed(2)}</Text>
            <Text style={styles.text}>{parseFloat(win).toFixed(2)}</Text>
        </View>
    )
}



function BetRow(props){
    // console.log('betrow props: ', props.microMode)
        return (
            <View style={{...styles.container,backgroundColor:backgrounder(props.index) }}>
                {renderPick(props)}
                {renderRiskWin(props)}
                {!props.slip ? <Text style={{ width: '20%', height: 50 }}>{props.bet.status}</Text> : <Button onPress={() => props.removeHandler(props.bet.game.id)} title="❌"/>}
            </View>
        )}

export default BetRow

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    text:{
        width: '50%', 
        height: 50,
        textAlign: 'center',
    
    }
})