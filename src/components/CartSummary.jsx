/**
 * CartSummary.jsx
 * -----------------
 * Componente que muestra un resumen visual del carrito de compras.
 * 
 * Funcionalidades:
 * - Lista de productos en el carrito con mini-imagen, nombre, cantidad y subtotal.
 * - Totales de productos y total en dinero.
 * - Botón para abrir el carrito flotante (CartIcon) mediante referencia.
 * - Animaciones: fade + slide + bounce al cargar, hover en productos y botón.
 * 
 * Requisitos:
 * - Recibe `cartIconRef` para poder abrir el CartIcon desde aquí.
 * - Se conecta con el contexto `CartContext` para obtener el estado del carrito.
 */

import React from "react";
import { useCart } from "../context/CartContext.jsx";

const CartSummary = ({ cartIconRef }) => {
  //Extraemos el carrito del contexto
  const { cart } = useCart();

  //Calculamos total de productos y total en dinero
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-summary">
      <h2>PRODUCTOS SELECCIONADOS</h2>

      {/*Si no hay productos */}
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          {/*Lista de productos */}
          <ul>
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                {item.image && <img src={item.image} alt={item.name} />}
                <div className="cart-item-info">
                  <strong>{item.name}</strong>
                  <div>Qty: {item.quantity}</div>
                </div>
                <div>${item.price * item.quantity}</div>
              </li>
            ))}
          </ul>

          {/*Totales */}
          <p><strong>Total de productos:</strong> {totalItems}</p>
          <p><strong>Total a pagar:</strong> ${totalPrice}</p>

          {/* 🔹 Botón para abrir el carrito flotante */}
          <button
            className="pay-btn"
            onClick={() => cartIconRef.current?.openCart()}
          >
            Ver carrito
          </button>
        </>
      )}
    </div>
  );
};

export default CartSummary;
