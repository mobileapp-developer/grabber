import React from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { CardProps } from '../types/CardType.type'

const Card = ({ title, image, price, rating, count, onPress }: CardProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={image} />
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
        </TouchableOpacity>
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
})