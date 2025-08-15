import { CategoryButtonProps } from '@/types/CategoryButton.type'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const CategoryButton = ({ category, image, onPress }: CategoryButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Image source={image} style={styles.icon} />
                </View>
                <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">{category}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default CategoryButton

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        margin: 16,
        marginHorizontal: 8,
    },
    container: {
        height: 70,
        width: 70,
        backgroundColor: '#F6F6F6',
        borderRadius: 35,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    icon: {
        width: 32,
        height: 32,
        marginBottom: 0,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 13,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
        marginTop: 16,
        maxWidth: 72,
        overflow: 'hidden',
    },
});