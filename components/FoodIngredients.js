import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FoodIngredients({ data }) {

    return data.map((dataIng, index) => (
        <View style={styles.listItem} key={index}>
            <Text style={styles.itemText}>
                {dataIng}
            </Text>
        </View>
    ))
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: 'orange',
        marginVertical: 4,
        marginHorizontal: 12,
        borderRadius: 10,
        paddingVertical: 4,
    },
    itemText: {
        textAlign: 'center',
    },
})