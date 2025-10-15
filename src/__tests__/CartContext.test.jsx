/**
 * CartContext.test.jsx
 * --------------------
 * Pruebas unitarias para verificar:
 * - Agregar productos
 * - Eliminar productos
 * - Persistencia en localStorage
 */

import React from "react";
import { renderHook, act } from "@testing-library/react";
import { CartProvider, useCart } from "../context/CartContext.jsx";

const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;

describe("CartContext", () => {
  beforeEach(() => localStorage.clear());

  it("debe agregar un producto al carrito", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart({ id: 1, name: "Producto A", price: 100 });
    });

    expect(result.current.cart.length).toBe(1);
    expect(result.current.cart[0].name).toBe("Producto A");
  });

  it("debe eliminar un producto del carrito", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart({ id: 1, name: "Producto A", price: 100 });
      result.current.removeFromCart(1);
    });

    expect(result.current.cart.length).toBe(0);
  });

  it("debe guardar el carrito en localStorage", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart({ id: 2, name: "Producto B", price: 200 });
    });

    const stored = JSON.parse(localStorage.getItem("cart"));
    expect(stored.length).toBe(1);
    expect(stored[0].id).toBe(2);
  });
});
