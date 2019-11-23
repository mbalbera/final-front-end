import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button,  } from 'react-native';
import _ from 'lodash'
import DrawerIcon from '../components/DrawerIcon';
import { Header } from 'react-native-elements';

class AddFundsScreen extends React.Component {
    state = {
        funds: 100,
        fundsForm: 0,
        password: '',
    }
    render() {
        return (
            <View>
            <Header style={styles.header}
                barStyle={'light-content'}
                leftComponent={<DrawerIcon />}
                rightComponent={<Text style={styles.funds}>Funds: ${this.state.funds}</Text>}
            />
                <View style={styles.midContainer}>
                    <Text style={{ color: 'rgb(10, 106, 250)', paddingBottom: 20 }}>Username has ${this.state.funds}</Text>
                    
                    <View style={styles.formContainer}>
                        <TextInput keyboardType={'numeric'} placeholder="Add Funds" onChangeText={fundsForm => this.setState({ fundsForm })} style={styles.input} autoCapitalize="none" />
                        <Button onClick={() => this.handleSubmit()} title="Submit" onPress={this.handleSubmit} style={styles.input} autoCapitalize="none" />
                    </View>
                </View>
            </View>
        )
    }


    handleSubmit = () => {
            let updated = parseInt(this.state.fundsForm) + parseInt(this.state.funds)
           this.setState({
               funds: updated,
               fundsForm: 0
           })
    }
}
AddFundsScreen.navigationOptions = {
    header: null,
    title: 'Home',
    left: <DrawerIcon />
};
export default AddFundsScreen
const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: 'rgb(53, 60, 80)',
    },

    betSlipText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white'
    },

    mainContainer: {
        top: 110,
        position: "absolute",
        alignSelf: 'center',
    },

    pic: {
        zIndex: 99,
        alignContent: 'center'

    },

    slider: {
        width: 200,
        height: 40,
        alignContent: 'center'

    },
    midContainer: {
        marginTop: 15,
        paddingTop: 25,
        paddingBottom: 25,
        alignItems: 'center',
    },

    title: {
        fontSize: 27,
        color: 'rgb(225,225,225)',
        lineHeight: 27,
        textAlign: 'center',
    },

    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    logo: {
        height: 80,
        resizeMode: "center"

    },
    funds: {
        color: 'white'
    },
    header: {
        backgroundColor: 'rgb(10,106,250)'
    },
});