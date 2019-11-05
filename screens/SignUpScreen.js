import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import _ from 'lodash'
import { white } from 'ansi-colors';
import { withNavigation, DrawerActions } from 'react-navigation';
import { Provider } from 'react-redux';

class SignUp extends React.Component {
    state = {
        email: '',
        name: '',
        password: '',
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={{ color: 'white' }}>Sign Up!</Text>
                <View style={styles.formContainer}>
                    <TextInput placeholder="Email" onChangeText={email => this.setState({ email })} style={styles.input} autoCapitalize="none" />
                    <TextInput placeholder="Name" onChangeText={name => this.setState({ name })} style={styles.input} autoCapitalize="none" />
                    <TextInput placeholder="Password" onChangeText={password => this.setState({ password })} style={styles.input} autoCapitalize="none" />
                    <Button onClick={() => this.handleSubmit()} title="Submit" onPress={this.handleSubmit} style={styles.input} autoCapitalize="none" />
                </View>
            </SafeAreaView>
        )
    }


    handleSubmit = () => {
        if (this.state.email && this.state.name && this.state.password) {
            const user = _.clone(this.state)
            console.log(user)
            this.props.signInSomeone()
        }
    }
}
export default SignUp
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(53, 60, 80)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        alignItems: 'center',
        width: '100%'
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        width: "80%"
    }
});