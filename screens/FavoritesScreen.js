import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FavoritesContext } from '../store/favoritesContext';
import { FOODS } from '../data/dummy-data';
import FoodList from '../components/FoodList';

export default function FavoritesScreen() {

    const favoriteFoodContext = useContext(FavoritesContext);
    const { ids } = favoriteFoodContext;
    const favoriteFoods = FOODS?.filter((food) => ids.includes(food.id));

    // useLayoutEffect(() => {
    //     const firstLoadFunc = async () => {
    //         const favoritesList = await AsyncStorage.getItem('favorites');
    //     }
    //     firstLoadFunc();
    // }, []);

    if (favoriteFoods.length === 0) {



        return (<View style={styles.container}>
            <Text style={styles.text}>
                Favorilere herhangi bir şey eklemediniz !
            </Text>
        </View>)
    }

    return (
        <FoodList items={favoriteFoods} />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})