import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGrid from '../components/CategoryGrid';
import { useNavigation } from '@react-navigation/native';

export default function CategoriesScreen({ navigation }) {

    const categories = CATEGORIES;


    const renderCategoryItem = (itemData) => {
        const pressHandler = () => {
            navigation.navigate('FoodOverview', { categoryId: itemData.item.id })
        }

        return (
            <CategoryGrid title={itemData.item.title} color={itemData.item.color} pressFood={pressHandler} />
        )
    }

    return (
        <FlatList data={categories} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2} />
    )
}

const styles = StyleSheet.create({})