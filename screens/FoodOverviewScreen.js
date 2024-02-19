import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { CATEGORIES, FOODS } from '../data/dummy-data';
import FoodItem from '../components/FoodItem';
import FoodList from '../components/FoodList';

export default function FoodOverviewScreen({ route, navigation }) {

    const { categoryId } = route.params;

    const displayedFoods = FOODS?.filter((foodItem) => {
        return foodItem.categoryIds.includes(categoryId);
    });





    // useEffect(() => {
    //     const categoryTitle = CATEGORIES?.find((category) => category.id === categoryId).title;
    //     navigation.setOptions({
    //         title: categoryTitle,
    //     })
    // }, [navigation, categoryId]); // son kalan title'ı gösterip ondan sonra değişiyor !


    // direkt olarak title atamasını yaptıktan sonra layout yükleniyor !!

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES?.find((category) => category.id === categoryId).title;
        navigation.setOptions({
            title: categoryTitle,
        })
    }, [navigation, categoryId]);

    return (
        <FoodList items={displayedFoods} />
    )
}

const styles = StyleSheet.create({})