'use strict';
import { StyleSheet, Dimensions } from 'react-native';

const DIMENSIONS = Dimensions.get('window');

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    cardContainer: {
        flex: 1,
        width: DIMENSIONS.width
    },
    cardStack: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        height: 400,
        width: 350,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 8,
        justifyContent: 'center',
        backgroundColor: '#FFF',
        overflow: 'hidden'
    },
    cardImage: {
        flex: 1,
        backgroundColor: '#1E90FF',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    cardText: {
        margin: 20,
    },
    cardTextMain: {
        textAlign: 'left',
        fontSize: 20,
        backgroundColor: 'transparent'
    },
    cardTextSecondary: {
        textAlign: 'left',
        fontSize: 15,
        color: 'grey',
        backgroundColor: 'transparent'
    },
    picLeft: {
        backgroundColor: 'rgb(0,118,182)',
        width:'50%'
    },
    picRight: {
        backgroundColor: 'rgb(11,22,42)',
        width:'50%'
    },
    teamLogo:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    }
});

export default Styles;