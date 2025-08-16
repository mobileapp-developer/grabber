import Button from '@/components/Button';
import Card from '@/components/Card';
import FreeDeliveryIndicator from '@/components/FreeDeliveryIndicator';
import { CartContext } from '@/context/CartContext';
import React, { useContext } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const CartScreen = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, getTotalPrice } = useContext(CartContext);
  const totalPrice = getTotalPrice();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      {cartItems.length === 0 ? (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Card
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  count={item.count}
                  onPress={() => { }}
                />
                <View style={styles.quantityContainer}>
                  <Text style={styles.quantityLabel}>Amount:</Text>
                  <View style={styles.quantityControls}>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                  </View>
                </View>
              </View>
            )}
            contentContainerStyle={styles.cartList}
          />
          <View style={styles.footer}>
            <View style={styles.totalContainer}>
              <Text style={styles.totalLabel}>Total:</Text>
              <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
            </View>
            <View>
              <FreeDeliveryIndicator
                amountLeft={20.00 - totalPrice}
                cartTotal={totalPrice}
                freeDeliveryThreshold={20.00}
                onGoToCart={() => { }}
              />
            </View>
            <View style={styles.checkoutButtonContainer}>
              <Button title="Go to Checkout" onPress={() => { alert('Checkout pressed') }} />
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 105,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    color: '#888',
  },
  cartList: {
    paddingHorizontal: 16,
  },
  cartItem: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginLeft: 8,
  },
  quantityLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 8,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
    fontWeight: '500',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0CA201',
  },
  checkoutButtonContainer: {
    marginTop: 16,
  },
});