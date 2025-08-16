import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Card from '@/components/Card';
import { fruits } from '@/constants/fruits';
import { vegetables } from '@/constants/vegetables';
import { dairy } from '@/constants/dairy';

const AllVegetables = () => {
    return (
        // Fruits FlatList
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ backgroundColor: '#fff', paddingTop: 150, }}>
            <View style={{ flex: 1 }}>
                <View style={styles.categoryButtonContainer}>
                    {dairy.map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            //@ts-ignore
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

export default AllVegetables

const styles = StyleSheet.create({
    categoryButtonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
})