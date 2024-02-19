import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FavoritesScreen() {

    useLayoutEffect(() => {
        const firstLoadFunc = async () => {
            const favoritesList = await AsyncStorage.getItem('favorites');
        }
        firstLoadFunc();
    }, [])

    return (
        <View>
            <Text>FavoritesScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})