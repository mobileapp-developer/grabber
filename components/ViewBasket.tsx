import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CartContext } from '@/context/CartContext';
import { ViewBasketProps } from '@/types/ViewBasket.type';
import { FontAwesome6 } from '@expo/vector-icons';

const ViewBasket: React.FC<ViewBasketProps> = ({ itemCount, onPress }) => {
  const { cartItems } = useContext(CartContext);
  const totalCount = typeof itemCount === 'number' ? itemCount : cartItems.reduce((s, i) => s + i.quantity, 0);

  if (totalCount === 0) return null;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={0.85} onPress={onPress}>
        <FontAwesome6 name="basket-shopping" size={24} color="#FFFFFF" />
        <Text style={styles.text}>View Basket</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{totalCount}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  position: 'absolute',
  bottom: 30,
  left: 12,
  right: 12,
  zIndex: 9999,
  },
  button: {
    backgroundColor: '#0CA201',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 8,
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  text: {
    flex: 1,
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    paddingLeft: 12,
  },
  counter: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    color: '#21B573',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default ViewBasket;