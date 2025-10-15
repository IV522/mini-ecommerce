/**
 * ProductList.test.jsx
 * -----------------
 * Test para ProductList usando fetch mock
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import ProductList from "../components/ProductList.jsx";
import { CartProvider } from "../context/CartContext.jsx";

// 🔹 Mock de fetch antes de cada test
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          {
            id: 1,
            name: "Manzana",
            price: 100,
            image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=150&q=80"
          },
          {
            id: 2,
            name: "Pera",
            price: 200,
            image: "https://images.unsplash.com/photo-1649555150365-b98dfc1505bb?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=870"
          },
          {
            id: 3,
            name: "Uva",
            price: 300,
            image: "https://plus.unsplash.com/premium_photo-1681826659316-fa513caebdb1?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=870"
          },
        ]),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("muestra productos desde fetch correctamente", async () => {
  render(
    <CartProvider>
      <ProductList />
    </CartProvider>
  );

  //Esperamos a que se rendericen los productos con nombres correctos
  expect(await screen.findByText("Manzana")).toBeInTheDocument();
  expect(await screen.findByText("Pera")).toBeInTheDocument();
  expect(await screen.findByText("Uva")).toBeInTheDocument();
});
