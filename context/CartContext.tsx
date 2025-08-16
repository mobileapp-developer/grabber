import React, { createContext, ReactNode, useState } from 'react';

export interface CartItem {
  id: string;
  title: string;
  image: any;
  price: number;
  rating: number;
  count: number;
  quantity?: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  // Favorites
  favorites: CartItem[];
  addToFavorites: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  clearCart: () => {},
  getTotalPrice: () => 0,
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  isFavorite: () => false,
});

export const CartProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i => 
          i.id === item.id ? {...i, quantity: (i.quantity ?? 0) + 1} : i
        );
      } else {
        return [...prevItems, {...item, quantity: 1}];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const increaseQuantity = (id: string) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
  item.id === id ? {...item, quantity: (item.quantity ?? 0) + 1} : item
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setCartItems(prevItems => {
      const item = prevItems.find(i => i.id === id);
      if (item && item.quantity === 1) {
        return prevItems.filter(i => i.id !== id);
      }
      return prevItems.map(i => 
  i.id === id ? {...i, quantity: Math.max((i.quantity ?? 1) - 1, 0)} : i
      );
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
  return cartItems.reduce((total, item) => total + (item.price * (item.quantity ?? 0)), 0);
  };

  const addToFavorites = (item: Omit<CartItem, 'quantity'>) => {
    setFavorites(prev => {
      if (prev.find(i => i.id === item.id)) return prev;
      return [...prev, {...item}];
    });
  };

  const removeFromFavorites = (id: string) => {
    setFavorites(prev => prev.filter(i => i.id !== id));
  };

  const isFavorite = (id: string) => {
    return favorites.some(f => f.id === id);
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
      ,
      // favorites
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite
    }}>
      {children}
    </CartContext.Provider>
  );
};
