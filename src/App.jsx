/**
 * App.jsx
 * -----------------
 * Componente principal de la aplicación.
 * Envuelve toda la app con el contexto del carrito (CartContext)
 * Muestra:
 * - Lista de productos (ProductList)
 * - Resumen de compra (CartSummary)
 * - Ícono flotante del carrito (CartIcon) con popup y animación
 */

import React, { useRef } from "react";
import { CartProvider } from "./context/CartContext.jsx";
import ProductList from "./components/ProductList.jsx";
import CartIcon from "./components/CartIcon.jsx"; // Ícono flotante del carrito
import CartSummary from "./components/CartSummary.jsx"; // Resumen compacto de compra
import "./App.css";

function App() {
  //Ref para controlar el CartIcon desde CartSummary
  const cartIconRef = useRef(null);

  return (
    <CartProvider>
      <div className="App">
        {/*Ícono flotante del carrito */}
        <CartIcon ref={cartIconRef} />

        <h1>Mini Ecommerce</h1>

        <div className="main-content" style={{ display: "flex", gap: "20px" }}>
          {/*Lista de productos */}
          <ProductList />

          {/*Resumen de compra */}
          <CartSummary cartIconRef={cartIconRef} />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
