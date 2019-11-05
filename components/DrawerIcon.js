import { Platform } from 'react-native';
import { withNavigation, DrawerActions } from 'react-navigation';
import { Icon } from 'react-native-elements'
import React from 'react'


const DrawerIcon = (props) => {

    return (
        <Icon name="menu" size={28} color="white" style={{ paddingLeft: 20 }} onPress={() => props.navigation.toggleDrawer()} />
    )
}


export default withNavigation(DrawerIcon)