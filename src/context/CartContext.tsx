// AI Generated Code by Deloitte + Cursor (BEGIN)
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Cart, CartItem, Product } from '../types';

interface CartContextType {
  cart: Cart;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

/**
 * Cart Provider component for managing shopping cart state
 * Follows React Code Standards - using Context for state management
 */
export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Cart>({
    items: [],
    totalItems: 0,
    totalPrice: 0,
  });

  const calculateTotals = useCallback((items: CartItem[]): Pick<Cart, 'totalItems' | 'totalPrice'> => {
    return {
      totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
      totalPrice: items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    };
  }, []);

  const addToCart = useCallback((product: Product) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.items.findIndex(
        (item) => item.productId === product.id
      );

      let newItems: CartItem[];

      if (existingItemIndex >= 0) {
        // Update existing item quantity
        newItems = prevCart.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item
        newItems = [
          ...prevCart.items,
          { productId: product.id, product, quantity: 1 },
        ];
      }

      return {
        items: newItems,
        ...calculateTotals(newItems),
      };
    });
  }, [calculateTotals]);

  const removeFromCart = useCallback((productId: string) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.filter((item) => item.productId !== productId);
      return {
        items: newItems,
        ...calculateTotals(newItems),
      };
    });
  }, [calculateTotals]);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) => {
      const newItems = prevCart.items.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      );
      return {
        items: newItems,
        ...calculateTotals(newItems),
      };
    });
  }, [calculateTotals, removeFromCart]);

  const clearCart = useCallback(() => {
    setCart({
      items: [],
      totalItems: 0,
      totalPrice: 0,
    });
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/**
 * Custom hook for accessing cart context
 * Follows React Code Standards - custom hook with proper error handling
 */
export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
// AI Generated Code by Deloitte + Cursor (END)
