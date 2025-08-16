import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Card from '@/components/Card';
import { biscuits } from '@/constants/biscuits';

const AllDetergents = () => {
    return (
        // Fruits FlatList
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ backgroundColor: '#fff', paddingTop: 150, }}>
            <View style={{ flex: 1 }}>
                <View style={styles.categoryButtonContainer}>
                    {biscuits.map((item, index) => (
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

export default AllDetergents

const styles = StyleSheet.create({
    categoryButtonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
})