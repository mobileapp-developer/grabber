import Card from '@/components/Card';
import { biscuits } from '@/constants/biscuits';
import { dairy } from '@/constants/dairy';
import { detergents } from '@/constants/detergents';
import { fruits } from '@/constants/fruits';
import { vegetables } from '@/constants/vegetables';
import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const allProducts = [
  ...fruits,
  ...detergents,
  ...biscuits,
  // dairy and vegetables may not have ids or images; map to consistent shape
  ...dairy.map((d, idx) => ({ id: `dairy-${idx}`, title: d.title, image: require('@/assets/images/cardImage.png'), price: d.price, rating: d.rating, count: d.count })),
  ...vegetables.map((v, idx) => ({ id: `veg-${idx}`, title: v.title, image: require('@/assets/images/cardImage2.png'), price: v.price, rating: v.rating, count: v.count })),
];

const Search = () => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allProducts;
    return allProducts.filter(p => p.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search products by name"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
        value={query}
        onChangeText={setQuery}
      />
      {results.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No products found for "{query}"</Text>
        </View>
      ) : (
        <FlatList
          data={results}
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
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100
  },
  input: {
    height: 48, borderColor: '#ddd', borderWidth: 1, borderRadius: 8, margin: 12, padding: 12
  },
  emptyContainer: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  emptyText: {
    color: '#666', fontSize: 16
  },
});