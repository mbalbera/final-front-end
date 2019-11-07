import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

// const data = [
//     { key: 5, img_path: require('../assets/images/sport_images/Golf.png') }, { key: 2, img_path: require('../assets/images/sport_images/basketball.png') }, { key: 3, img_path: require('../assets/images/sport_images/boxer.png') }, { key: 4, img_path: require('../assets/images/sport_images/football.png') }
//     , { key: 1, img_path: require('../assets/images/sport_images/baseball.png') },  { key: 6, img_path: require('../assets/images/sport_images/hockey.png') }, { key: 8, img_path: require('../assets/images/sport_images/soccer.png') }, { key: 7, img_path: require('../assets/images/sport_images/horse.png') },  { key: 9, img_path: require('../assets/images/sport_images/TV.png') }
// ];
const data = [
    { key: 5, img_path: require('../assets/images/sport_images/ncaa-logo-football.png') }, { key: 2, img_path: require('../assets/images/sport_images/nba-logo.png') }, { key: 3, img_path: require('../assets/images/sport_images/nhl-logo.png') }, { key: 4, img_path: require('../assets/images/sport_images/horse.png') }
    , { key: 1, img_path: require('../assets/images/sport_images/nfl-logo.png') }, { key: 6, img_path: require('../assets/images/sport_images/mlb-logo.png') }, { key: 8, img_path: require('../assets/images/sport_images/soccer-logo.png') }, { key: 7, img_path: require('../assets/images/sport_images/ncaa-logo-basketball.png') }, { key: 9, img_path: require('../assets/images/sport_images/pga-logo.png') }
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
   
    renderItem = ({ item }) => {
        if (item.empty) {
            return <View style={[styles.item, styles.itemInvisible]} />;
        }
        // console.log('category nav props: ',props.navigation)
        return (
            <TouchableOpacity style={styles.item} onPress={() => props.navigation.navigate('Game')}>
                <Image
                    style={styles.pics}
                    source={item.img_path}
                />
            </TouchableOpacity>
        );
    };
        return (
            <View>
                <FlatList
                data={formatData(data, numColumns)}
                style={styles.container}
                renderItem={this.renderItem}
                numColumns={numColumns}
                />
            </View>
        );

}
export default Categories 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
    },
    item: {
        backgroundColor: 'rgb(91,95,105)',
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