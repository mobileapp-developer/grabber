import React from "react";
import { Dimensions, FlatList, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link, useRouter } from "expo-router";
import Card from "@/components/Card";
import CategoryButton from "@/components/CategoryButton";
import OfferCard from "@/components/OfferCard";
import { biscuits } from "@/constants/biscuits";
import { cards } from "@/constants/cards";
import { categories } from "@/constants/categories";
import { detergents } from "@/constants/detergents";
import { fruits } from "@/constants/fruits";

const CARD_WIDTH = 380 + 24;

export default function Home() {

  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Offers */}
      <View style={{ width: "100%", height: 230, justifyContent: "center", alignItems: "center" }}>
        <FlatList
          data={cards}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToAlignment="center"
          decelerationRate="fast"
          snapToInterval={CARD_WIDTH}
          contentContainerStyle={{
            paddingHorizontal: (Dimensions.get('window').width - CARD_WIDTH) / 2,
          }}
          style={{ paddingTop: 4, marginBottom: 16 }}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={({ item }) => (
            <OfferCard
              offer={item.offer}
              description={item.description}
              image={item.image}
              backgroundColor={item.backgroundColor}
              buttonColor={item.buttonColor}
              style={{ color: item.textColor }}
            />
          )}
        />
      </View>
      <View style={styles.categoryButtonContainer}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 12,
          }}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={({ item }) => (
            <CategoryButton
              category={item.category}
              image={item.image}
              onPress={() => { router.push(item.route as any); }}
            />
          )}
        />
      </View>

      {/* Fruits FlatList */}
      <View style={styles.popularCategoriesContainer}>
        <Text style={styles.categoryName}>Fruits</Text>
        <Link href="/(categories)/AllFruits">
          <Text style={styles.seeAllText}>See all</Text>
        </Link>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
        <FlatList
          data={fruits.slice(0, 5)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 12,
          }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              count={item.count}
              onPress={() => { alert('Product selected'); }}
            />
          )}
        />
      </View>

      {/* Detergents FlatList */}
      <View style={[styles.popularCategoriesContainer, { marginTop: 12 }]}>
        <Text style={styles.categoryName}>Detergents</Text>
        <TouchableOpacity onPress={() => { router.push('/(categories)/AllDetergents'); }}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
        <FlatList
          data={detergents}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 12,
          }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              count={item.count}
              onPress={() => { alert('Product selected'); }}
            />
          )}
        />
      </View>

      {/* Biscuits FlatList */}
      <View style={[styles.popularCategoriesContainer, { marginTop: 12 }]}>
        <Text style={styles.categoryName}>Biscuit</Text>
        <TouchableOpacity onPress={() => { router.push('/(categories)/AllBiscuits'); }}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
        <FlatList
          data={biscuits}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 12,
          }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              count={item.count}
              onPress={() => { alert('Product selected'); }}
            />
          )}
        />
      </View>

      <StatusBar barStyle="dark-content" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffffff',
    paddingTop: 105,
  },
  categoryButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
  },
  popularCategoriesContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: "90%",
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
    bottom: 10,
    left: 20,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
  seeAllText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0CA201",
  },
});