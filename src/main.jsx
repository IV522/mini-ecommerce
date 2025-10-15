/**
 * main.jsx
 * -----------------
 * Punto de entrada principal de la aplicación React.
 * Configura el enrutamiento entre páginas usando React Router.
 *
 * Rutas disponibles:
 * - "/" → Página principal con productos y resumen de compra.
 * - "/cart" → Página del carrito completo.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes principales
import App from "./App.jsx";
import CartPage from "./pages/CartPage.jsx";

// Estilos globales
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<App />} />

        {/* Página del carrito */}
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
