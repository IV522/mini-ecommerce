/**
 * CartSummary.test.jsx
 * -----------------
 * Test para CartSummary usando CartProvider y referencia falsa
 */

import React, { createRef } from "react";
import { render, screen } from "@testing-library/react";
import CartSummary from "../components/CartSummary.jsx";
import { CartProvider, useCart } from "../context/CartContext.jsx";

//Mock de productos para el test
const mockProducts = [
  { id: 1, name: "Manzana", price: 100, quantity: 2, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=150&q=80" },
  { id: 2, name: "Pera", price: 200, quantity: 1, image: "https://images.unsplash.com/photo-1649555150365-b98dfc1505bb?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=870" },
];

test("CartSummary muestra productos y totales correctamente", () => {
  const fakeRef = createRef();
  fakeRef.current = { openCart: jest.fn() };

  // Renderizamos el componente con CartProvider
  render(
    <CartProvider>
      <CartSummary cartIconRef={fakeRef} />
    </CartProvider>
  );

  //Para simular que el carrito tiene productos, usamos setItem en localStorage
  localStorage.setItem("cart", JSON.stringify(mockProducts));

  //Re-renderizamos para que se carguen los productos del localStorage
  render(
    <CartProvider>
      <CartSummary cartIconRef={fakeRef} />
    </CartProvider>
  );

  //Comprobamos que los productos aparezcan en pantalla
  expect(screen.getByText("Manzana")).toBeInTheDocument();
  expect(screen.getByText("Pera")).toBeInTheDocument();

  //Comprobamos totales
  expect(screen.getByText("Total de productos:")).toBeInTheDocument();
  expect(screen.getByText("Total a pagar:")).toBeInTheDocument();
});
