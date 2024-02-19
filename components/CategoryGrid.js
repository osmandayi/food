import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function CategoryGrid({ title, color, pressFood }) {

    return (
        <View style={styles.gridItem}>
            <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={pressFood} >
                <View style={[styles.insideView, { backgroundColor: `${color}` }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        height: 150,
        margin: 15,
        flex: 1,
        elevation: 4,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: .2,
        shadowRadius: 3,
        borderRadius: 20,
        backgroundColor: 'white',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: .5,
    },
    insideView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})