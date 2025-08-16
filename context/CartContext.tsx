import React, { createContext, ReactNode, useState } from 'react';

// Cart item interface
export interface CartItem {
  id: string;
  title: string;
  image: any;
  price: number;
  rating: number;
  count: number;
  quantity: number;
}

// Cart context interface
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

// Create the Cart context
export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  clearCart: () => {},
  getTotalPrice: () => 0,
});

// Cart provider component
export const CartProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Add item to cart
  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i => 
          i.id === item.id ? {...i, quantity: i.quantity + 1} : i
        );
      } else {
        return [...prevItems, {...item, quantity: 1}];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Increase item quantity
  const increaseQuantity = (id: string) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? {...item, quantity: item.quantity + 1} : item
      )
    );
  };

  // Decrease item quantity
  const decreaseQuantity = (id: string) => {
    setCartItems(prevItems => {
      const item = prevItems.find(i => i.id === id);
      if (item && item.quantity === 1) {
        return prevItems.filter(i => i.id !== id);
      }
      return prevItems.map(i => 
        i.id === id ? {...i, quantity: i.quantity - 1} : i
      );
    });
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Get total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      clearCart,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};
