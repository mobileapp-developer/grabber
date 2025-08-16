import Card from '@/components/Card';
import { CartContext } from '@/context/CartContext';
import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const Favorite = () => {
  const { favorites } = useContext(CartContext);

  if (!favorites || favorites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favorites yet</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 12 }}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            count={item.count}
            onPress={() => { }}
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyText: {
    fontSize: 18,
    color: '#666'
  },
});