import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'


function renderPick(props){
    if (props.bet.game.kind_of_bet === "total"){
        if (props.bet.direction === "left"){
            return (
                <View style={styles.container}>
                    <Text style={{ width: '50%', height: 50, backgroundColor: 'powderblue' }}>Over {props.bet.game.home_team_spread}</Text>
                    <Text style={{ width: '50%', height: 50, backgroundColor: 'skyblue' }}>{props.bet.game.home_team_abr}/{props.bet.game.away_team_abr}</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Text style={{ width: '50%', height: 50, backgroundColor: 'powderblue' }}>Under {props.bet.game.home_team_spread}</Text>
                    <Text style={{ width: '50%', height: 50, backgroundColor: 'skyblue' }}>{props.bet.game.home_team_abr}/{props.bet.game.away_team_abr}</Text>
                </View>
            )        
        }
    } else if (props.bet.game.kind_of_bet === "moneyline"){
        if (props.bet.direction === "left"){
            return (
                <View style={styles.container}>
                    <Text style={{ width: '50%', height: 50, backgroundColor: 'powderblue' }}>{props.bet.game.home_team_abr}</Text>
                    <Text style={{ width: '50%', height: 50, backgroundColor: 'skyblue' }}>{props.bet.game.away_team_abr}</Text>
                </View>
        )} else{
            return(
                <View style={styles.container}>
                    <Text style={{ width: '50%', height: 50, backgroundColor: 'powderblue' }}>{props.bet.game.home_team_abr}</Text>
                    <Text style={{ width: '50%', height: 50, backgroundColor: 'skyblue' }}>{props.bet.game.away_team_abr}</Text>
                </View>
        )}
    } else{ //SPREAD
        if (props.bet.direction === "left") {
            return (
                <View style={styles.container}>
                    <Text style={{ width: '50%', height: 50, backgroundColor: 'powderblue' }}>{props.bet.game.home_team_spread > 0 ? `${props.bet.game.home_team_abr} +${props.bet.game.home_team_spread}` : `${props.bet.game.home_team_abr} ${props.bet.game.home_team_spread}`}</Text>
                    <Text style={{ width: '50%', height: 50, backgroundColor: 'skyblue' }}>{props.bet.game.away_team_abr}</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Text style={{ width: '50%', height: 50, backgroundColor: 'powderblue' }}>{props.bet.game.away_team_spread > 0 ? `${props.bet.game.away_team_abr} +${props.bet.game.away_team_spread}` : `${props.bet.game.away_team_abr} ${props.bet.game.away_team_spread}`}</Text>
                    <Text style={{ width: '50%', height: 50, backgroundColor: 'skyblue' }}>{props.bet.game.home_team_abr}</Text>
                </View>
            )
        }
    }
}

function renderRiskWin(props){
    
    let line
    let win
    let risk = (props.bet.confidence / props.totalConfidence) * 50
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
    // console.log("risk: ", risk)
    // console.log("win: ", win)
    // console.log("line: ", line)
    return (
        <View style={styles.container}>
            <Text style={{ width: '50%', height: 50, backgroundColor: 'steelblue' }}>{parseFloat(risk).toFixed(2)}</Text>
            <Text style={{ width: '50%', height: 50, backgroundColor: 'powderblue' }}>{parseFloat(win).toFixed(2)}</Text>
        </View>
    )
}



function BetRow(props){
    // console.log('betrow props: ', props)
        return (
            <View style={styles.container}>
                {renderPick(props)}
                {renderRiskWin(props)}
                {!props.slip ? <Text style={{ width: '20%', height: 50, backgroundColor: 'skyblue' }}>{props.bet.status}</Text> : <Button onPress={() => props.removeHandler(props.bet.game.id)} title="❌"/>}
            </View>
        )}

export default BetRow

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
})