import React from 'react';
import DrawerIcon from '../components/DrawerIcon';
import { Header } from 'react-native-elements';
import { withNavigation, DrawerActions } from 'react-navigation';

// import Categories from '../components/Categories'
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function UsersScreen() {
  return (
    <View style={styles.container}>
      <Header style={styles.header}
        leftComponent={<DrawerIcon />}
        // centerComponent={<Text style={styles.title}>User Name</Text>}
        rightComponent={<Text style={styles.funds}>Funds: $100</Text>}
      />
      <View style={styles.main}>
        <Text style={styles.title}>Username</Text>
        <Text style={styles.title}>Funds: $100 </Text>
         <View style={styles.buttonsContainer}>

          <Button style={styles.button} title="Add Funds"/>
          <Button style={styles.button} title="Withdraw Funds"/>
         </View>
        <Button style={styles.button} title="My Stats"/>
       </View>
    </View>
  );
}

UsersScreen.navigationOptions = {
  header: null,
  left: <DrawerIcon />
};

export default withNavigation(UsersScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
  buttonsContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 50
  },
  title: {
    fontSize: 27,
    color: 'black',
    lineHeight: 27,
    textAlign: 'center',
    paddingBottom: 7
  },
  button: {
    backgroundColor: 'rgb(53, 60, 80)',
    color: 'white'
  },

  main:{
    paddingTop: 25
  }
});
