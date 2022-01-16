import React from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';


const data = [
    { key: 1, img_path: require('../assets/images/sport_images/ncaa-football-logo.png'), sport: 'ncaaf' }, 
    { key: 2, img_path: require('../assets/images/sport_images/nba-logo.png'), sport: 'nba' }, 
    { key: 3, img_path: require('../assets/images/sport_images/nhl-logo.png'), sport: 'nhl' }, 
    { key: 4, img_path: require('../assets/images/sport_images/ufc-logo.png'), sport: 'ufc' }, 
    { key: 5, img_path: require('../assets/images/sport_images/nfl-logo.png'), sport: 'nfl' }, 
    { key: 6, img_path: require('../assets/images/sport_images/mlb-logo.png'), sport: 'mlb' }, 
    { key: 7, img_path: require('../assets/images/sport_images/mls-logo.png'), sport: 'mls' }, 
    { key: 8, img_path: require('../assets/images/sport_images/ncaa-basketball-logo.png'), sport: 'ncaam' }, 
    { key: 9, img_path: require('../assets/images/sport_images/wnba-logo.png'), sport: 'wnba' }
];

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }

    return data;
};



const numColumns = 3;
function Categories(props){
   
        return (
            <View>
                <FlatList
                    data={formatData(data, numColumns)}
                    style={styles.container}
                    renderItem={({ item }) => 
                        <TouchableOpacity style={styles.item} onPress={() => props.navigateToGame(item.sport)}>
                            <Image style={styles.pics} source={item.img_path}/>
                        </TouchableOpacity>
                    }
                    numColumns={numColumns}
                    keyExtractor={item => item.id}
                />
            </View>
        );

}
export default withNavigation(Categories)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
    },
    item: {
        // backgroundColor: 'rgb(91,95,105)',
        backgroundColor: 'rgb(191,195,205)',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: Dimensions.get('window').width / numColumns, 
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    itemText: {
        color: 'white',
    },
    title: {
        fontSize: 15,
        color: 'rgb(225,225,225)',
        lineHeight: 17,
        textAlign: 'center',
    },
    pics:{
        height: 80,
        width: 80,
        resizeMode: "center"
    }
});