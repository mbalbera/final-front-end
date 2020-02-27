import { Platform } from 'react-native';
import { withNavigation, DrawerActions } from 'react-navigation';
import { Icon } from 'react-native-elements'
import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';



const swipeDirection = () => {

    return (
       <View>
           <ScrollView>
               <Text>
                Directions

                Confidence / Unit meter:
                The more confident you are in your pick the further you should slide to the right.
                When using MicroMode this creates the ratio of this pick compared to your other picks in order to divy up the funds.
                When using MacroMode this multiplies your number of units by how much one of your units is worth.

                Totals:
                Swipe Right for over the point total.
                Swipe Left for under the point total.
                Swipe up or down to pass on the game.

                Moneylines and Spreads:
                Swipe toward the side of the team you want to bet on.
                Swipe away from the side of the team you want to bet against.
                Swipe up or down to pass on the game

                When you are done swiping click Bet Slip to see all of your bets
               </Text>
           </ScrollView>
       </View>
    )
}


export default swipeDirection