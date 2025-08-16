import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Card from '@/components/Card';
import { detergents } from '@/constants/detergents';

const AllDetergents = () => {
    return (
        // Fruits FlatList
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ backgroundColor: '#fff', paddingTop: 150, }}>
            <View style={{ flex: 1 }}>
                <View style={styles.categoryButtonContainer}>
                    {detergents.map((item, index) => (
                        <Card
                            key={index}
                            id={item.id}
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