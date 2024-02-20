import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { FOODS } from '../data/dummy-data';
import FoodIngredients from '../components/FoodIngredients';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FavoritesContext } from '../store/favoritesContext';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

export default function FoodDetailScreen({ route, navigation }) {
    const favoriteFoodsIds = useSelector((state) => state.favoriteFoods.ids);
    // const favoriteFoodContext = useContext(FavoritesContext);
    // const { ids, removeFavorite, addFavorite } = favoriteFoodContext;
    const { foodId } = route.params;
    // const [favorites, setFavorites] = useState(false);
    const dispatch = useDispatch();
    const selectedFood = FOODS?.find((food) => food.id === foodId);

    const { affordability, categoryIds, complexity, imageUrl, ingredients, title } = selectedFood;

    // const foodIsFavorite = ids.includes(foodId);
    const foodIsFavorite = favoriteFoodsIds.includes(foodId);

    const favHandler = () => {
        if (foodIsFavorite) {
            dispatch(removeFavorite({id: foodId}));
            // removeFavorite(foodId);
        }
        else {
            dispatch(addFavorite({id: foodId}));
            // addFavorite(foodId);
        }

    }



    // const favHandler = async () => {
    //     try {
    //         // AsyncStorage'den favorilerin listesini al
    //         const favoritesList = await AsyncStorage.getItem('favorites');
    //         let favoritess = [];

    //         // Eğer favoriler listesi varsa onu al, yoksa boş bir dizi ata
    //         if (favoritesList) {
    //             favoritess = JSON.parse(favoritesList);
    //         }

    //         // Eğer favorites listesi içinde bu yemeğin ID'si zaten varsa, favorilerden çıkar, yoksa ekle
    //         const index = favoritess.indexOf(foodId);
    //         if (index !== -1) {
    //             // Yemek favoriler listesinde bulundu, yani favorilerden çıkar
    //             favoritess.splice(index, 1);
    //             setFavorites(false);
    //         } else {
    //             // Yemek favoriler listesinde bulunamadı, yani favorilere ekle
    //             favoritess.push(foodId);
    //             setFavorites(true);
    //         }

    //         // Güncellenmiş favoriler listesini AsyncStorage'e kaydet
    //         await AsyncStorage.setItem('favorites', JSON.stringify(favoritess));


    //     } catch (error) {
    //         console.log('Hata oluştu:', error);
    //     }
    // }


    // useLayoutEffect(() => {

    //     const isFav = async () => {
    //         const favoritesList = await AsyncStorage.getItem('favorites');
    //         let favoritess = [];
    //         if (favoritesList) {
    //             favoritess = JSON.parse(favoritesList);
    //         }
    //         setFavorites(favoritess.includes(foodId));
    //     }



    //     isFav();

    // }, [favorites]);


    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Pressable style={({ pressed }) => pressed && styles.onPressed} onPress={favHandler}>
                        {
                            foodIsFavorite ? <AntDesign name="star" size={24} color="white" /> : <AntDesign name="staro" size={24} color="white" />
                        }
                    </Pressable>
                )
            }
        })
    }, [navigation, foodIsFavorite]);



    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.details}>
                <Text style={styles.detailItem}>{complexity}</Text>
                <Text style={styles.detailItem}>{affordability}</Text>
            </View>
            <View style={styles.listContainer}>
                <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitle}>İçindekiler</Text>
                </View>
                <FoodIngredients data={ingredients} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 50,
    },
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
        color: 'red',
    },
    listContainer: {
        width: '100%',
        paddingHorizontal: 10,
    },
    subTitleContainer: {
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'orange',
        marginVertical: 5,
    },
    subTitle: {
        color: 'orange',
        fontSize: 24,
        fontWeight: 'bold',
    },
    onPressed: {
        opacity: .5,
    }
})