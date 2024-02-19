import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import FoodItem from "./FoodItem";

export default function FoodList({ items }) {
    const renderFoodItem = (itemData) => {
        return <FoodItem data={itemData.item} />;
    };
    return (
        <View>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderFoodItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
