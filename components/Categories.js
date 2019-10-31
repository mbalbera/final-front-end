import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';

const data = [
    { key: 1, img_path: '../assets/images/sport_images/baseball.png' }, { key: 2, img_path: '../assets/images/sport_images/basketball.png' }, { key: 3, img_path: '../assets/images/sport_images/boxer.png' }, { key: 4, img_path: '../assets/images/sport_images/football.png' }
    , { key:5, img_path: 'Golf' }, { key:6, img_path: 'hockey' }, { key:7, img_path: 'Movie' }, { key:8, img_path: 'soccer' }, { key:9, img_path: 'TV' }
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
export default class App extends React.Component {
    renderItem = ({ item }) => {
        if (item.empty === true) {
            return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
            <View style={styles.item}>
                <Image style={styles.pics} source={require('../assets/images/sport_images/baseball.png')} />
            </View>
        );
    };

    render() {
        return (
            <View>
                <Text style={styles.title}>Categories</Text>
                <FlatList
                data={formatData(data, numColumns)}
                style={styles.container}
                renderItem={this.renderItem}
                numColumns={numColumns}
                />
            </View>
        );
    }
}

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
        resizeMode: "center"
    }
});