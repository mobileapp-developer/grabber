import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Card from '@/components/Card';
import { fruits } from '@/constants/fruits';

const AllFruits = () => {
    return (
        // Fruits FlatList
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ backgroundColor: '#fff' }}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                    {fruits.map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            count={item.count}
                            onPress={() => { alert('Product selected'); }}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

export default AllFruits

const styles = StyleSheet.create({
    categoryButtonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        bottom: 20,
    },
})