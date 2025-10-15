/**
 * CartContext.jsx
 * -----------------
 * Contexto global optimizado para manejar el carrito de compras.
 *
 * Funcionalidades:
 * - Agregar productos al carrito
 * - Eliminar productos del carrito
 * - Actualizar cantidad de productos
 * - Calcular total
 * - Limpiar carrito
 * - Persistencia en localStorage
 *
 * Mejoras:
 * - Uso de `useCallback` para evitar re-renderizados innecesarios
 * - Código modular y fácil de mantener
 *
 * Uso:
 * Envolver la app con <CartProvider> en App.jsx
 * Usar `useCart()` para acceder a los datos y funciones del carrito.
 */

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

const CartContext = createContext();

// Hook personalizado para acceder al carrito
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // Estado del carrito, cargando desde localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ----------------- Funciones del carrito -----------------
  const addToCart = useCallback((product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    if (quantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  // Calcular total usando useMemo para eficiencia
  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  //Valor del contexto
  const value = useMemo(() => ({
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total,
  }), [cart, addToCart, removeFromCart, updateQuantity, clearCart, total]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
