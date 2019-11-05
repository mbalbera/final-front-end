import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

function BetRow(props){
        return (
            <View style={styles.container}>
                <Text onPress={console.log(this.props)} style={{ width: 75, height: 50, backgroundColor: 'powderblue' }}>{props.bet.team}</Text>
                <Text onPress={console.log(this.props)} style={{ width: 75, height: 50, backgroundColor: 'skyblue' }}>{props.bet.team2}</Text>
                <Text style={{ width: 75, height: 50, backgroundColor: 'steelblue' }}>{props.bet.risk}</Text>
                <Text style={{ width: 75, height: 50, backgroundColor: 'powderblue' }}>{props.bet.to_win}</Text>
                {!props.slip ? <Text style={{ width: 75, height: 50, backgroundColor: 'skyblue' }}>{props.bet.status}</Text> : <Button onPress={() => props.removeHandler(props.bet)} title="❌"/>}
            </View>
        )}

export default BetRow

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
})