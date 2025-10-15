/**
 * CartContext.jsx
 * -----------------
 * Contexto global para manejar el carrito de compras.
 *
 * Funcionalidades:
 * - Agregar productos al carrito
 * - Eliminar productos del carrito
 * - Actualizar cantidad de productos
 * - Calcular total
 * - Limpiar carrito
 * - Persistencia en localStorage para mantener el carrito al recargar la página
 *
 * Uso:
 * Envolver la aplicación con <CartProvider> en App.jsx
 * Usar `useCart()` en los componentes para acceder a las funciones y datos del carrito.
 */

import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

// Crear contexto
const CartContext = createContext();

// Hook personalizado para usar el carrito fácilmente
export const useCart = () => useContext(CartContext);

// Componente proveedor del contexto
export const CartProvider = ({ children }) => {
  // Estado del carrito: leer desde localStorage al iniciar
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Guardar el carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /**
   * Agregar producto al carrito
   * Si ya existe, aumenta la cantidad
   */
  const addToCart = (product) => {
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
  };

  /**
   * Eliminar producto del carrito por id
   */
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  /**
   * Actualizar cantidad de un producto
   */
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return; // prevenir cantidades inválidas
    setCart(cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  /**
   * Limpiar todo el carrito
   */
  const clearCart = () => setCart([]);

  /**
   * Calcular total del carrito
   */
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Proveer todas las funciones y datos a los componentes hijos
  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      total
    }}>
      {children}
    </CartContext.Provider>
  );
};
