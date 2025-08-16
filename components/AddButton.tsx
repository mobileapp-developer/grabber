import React, { useRef, useState } from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const BUTTON_COLLAPSED_WIDTH = 35
const BUTTON_EXPANDED_WIDTH = 110

type AddButtonProps = {
    onAdd?: () => void
    onRemove?: () => void
}

const AddButton: React.FC<AddButtonProps> = ({ onAdd, onRemove }) => {
    const [quantity, setQuantity] = useState(0)
    const animatedWidth = useRef(new Animated.Value(BUTTON_COLLAPSED_WIDTH)).current

    const expandButton = () => {
        Animated.timing(animatedWidth, {
            toValue: BUTTON_EXPANDED_WIDTH,
            duration: 200,
            useNativeDriver: false,
        }).start()
    }

    const collapseButton = () => {
        Animated.timing(animatedWidth, {
            toValue: BUTTON_COLLAPSED_WIDTH,
            duration: 200,
            useNativeDriver: false,
        }).start()
    }

    const handleAdd = () => {
        if (quantity === 0) expandButton()
        setQuantity(q => q + 1)
        onAdd && onAdd()
    }

    const handleRemove = () => {
        if (quantity > 1) {
            setQuantity(q => q - 1)
        } else if (quantity === 1) {
            setQuantity(0)
            collapseButton()
        }
        onRemove && onRemove()
    }

    return (
        <Animated.View style={[styles.animatedAddButton, { width: animatedWidth }]}>
            {quantity === 0 ? (
                <TouchableOpacity onPress={handleAdd} style={styles.addButton}>
                    <Text style={{ color: "#000", fontSize: 24 }}>+</Text>
                </TouchableOpacity>
            ) : (
                <View style={styles.expandedButtonContent}>
                    <TouchableOpacity onPress={handleRemove}>
                        <Text style={{ color: "#000", fontSize: 22 }}>−</Text>
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 10, fontSize: 18 }}>{quantity}</Text>
                    <TouchableOpacity onPress={handleAdd}>
                        <Text style={{ color: "#000", fontSize: 22 }}>+</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    animatedAddButton: {
        height: 35,
        borderRadius: 17,
        backgroundColor: "#fff",
        position: "absolute",
        bottom: -4,
        left: 42,
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
    },
    addButton: {
        height: 35,
        width: 35,
        borderRadius: 17,
        justifyContent: "center",
        alignItems: "center",
    },
    expandedButtonContent: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 8,
    },
})

export default AddButton