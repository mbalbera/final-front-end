import { Platform } from 'react-native';
import { DrawerActions } from 'react-navigation';
import { Icon } from 'react-native-elements'
import React from 'react'


const DrawerIcon = ({ navigate }) => {

    return (
        <Icon name="menu" size={28} color="white" style={{ paddingLeft: 20 }} onPress={() => navigate('DrawerOpen')} />
    )
}


export default DrawerIcon