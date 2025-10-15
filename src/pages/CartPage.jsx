/**
 * CartPage.jsx
 * -----------------
 * Página dedicada al carrito de compras completo.
 * Muestra los productos añadidos, con opción de modificar cantidades o pagar.
 */

import React from "react";
import { useCart } from "../context/CartContext.jsx";
import "../App.css"; // Usa los estilos globales de tu app

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, total } = useCart();

  const handlePay = () => {
    if (cart.length === 0) return;
    alert("🎉 ¡Gracias por tu compra!");
    clearCart();
  };

  return (
    <div className="cart-page" style={{ padding: "40px", textAlign: "center" }}>
      <h1>🛍️ Tu carrito de compras</h1>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <table
            style={{
              width: "100%",
              maxWidth: "800px",
              margin: "30px auto",
              borderCollapse: "collapse",
              backgroundColor: "#ffffffcc",
              borderRadius: "15px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#3498db", color: "white" }}>
                <th style={{ padding: "10px" }}>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td style={{ padding: "10px" }}>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                      style={{
                        width: "60px",
                        textAlign: "center",
                        padding: "5px",
                      }}
                    />
                  </td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        backgroundColor: "#e74c3c",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        padding: "5px 10px",
                        cursor: "pointer",
                      }}
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: "20px" }}>
            <h3>
              <strong>Total:</strong> ${total}
            </h3>

            <button
              className="pay-btn"
              onClick={handlePay}
              style={{ marginRight: "10px" }}
            >
              Pagar ahora
            </button>

            <button
              className="clear-cart-btn"
              onClick={() => (window.location.href = "/")}
            >
              ← Seguir comprando
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
