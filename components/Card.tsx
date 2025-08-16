import React, { useContext } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { CartContext } from '@/context/CartContext';
import { Ionicons } from '@expo/vector-icons';
import { CardProps } from '../types/CardType.type';
import AddButton from './AddButton';

const Card = ({ id, title, image, price, rating, count, onPress }: CardProps & { id: string }) => {
    const { addToCart, decreaseQuantity, addToFavorites, removeFromFavorites, isFavorite } = useContext(CartContext);
    const favorite = isFavorite(id);
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={image} />
                    <View style={styles.addButton}>
                        <AddButton onAdd={() => addToCart({ id, title, image, price, rating, count })} onRemove={() => decreaseQuantity(id)} />
                    </View>

                    <TouchableOpacity
                        style={styles.favoriteButton}
                        onPress={() => favorite ? removeFromFavorites(id) : addToFavorites({ id, title, image, price, rating, count })}
                    >
                        <Ionicons name={favorite ? 'heart' : 'heart-outline'} size={22} color={favorite ? '#ff4d4d' : '#000'} />
                    </TouchableOpacity>
                </View>

                {/* Product Name */}
                <Text style={styles.title}>
                    {title}
                </Text>

                {/* Product Rating */}
                <View style={styles.productRatingContainer}>
                    <Ionicons name="star" size={18} color='#ffd900ff' />
                    <Text style={styles.productRatingText}>
                        {rating} ({count})
                    </Text>
                </View>

                {/* Product Price */}
                <View style={styles.productPrice}>
                    <Text style={styles.productPriceText}>
                        ${price}
                    </Text>
                </View>
            </View>
        </View>
    )
};

export default Card

const styles = StyleSheet.create({
    container: {
        width: 170,
        height: 250,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 12,
        backgroundColor: "#ffffffff",
        margin: 8,
        // borderWidth: 0.4,
    },
    imageContainer: {
        backgroundColor: "#F6F6F6",
        justifyContent: "center",
        alignItems: "center",
        height: 150,
        borderRadius: 12,
    },
    title: {
        paddingLeft: 8,
        fontSize: 18,
        fontWeight: "bold",
        top: 4,
    },
    productRatingContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 10,
        paddingLeft: 8,
    },
    productRatingText: {
        paddingLeft: 6,
        fontSize: 16,
        fontWeight: "500",
        color: "#000",
    },
    productPrice: {
        paddingTop: 10,
        paddingLeft: 4,
    },
    productPriceText: {
        paddingLeft: 8,
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
    addButton: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 10,
        left: -35,
    }

    ,
    favoriteButton: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: 'transparent',
        padding: 6,
        borderRadius: 20,
    }
})