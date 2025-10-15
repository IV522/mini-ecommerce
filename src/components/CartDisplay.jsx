/**
 * CartDisplay.jsx
 * -----------------
 * Componente que muestra el carrito de compras completo.
 * Permite:
 *  - Cambiar la cantidad de productos
 *  - Mostrar subtotal por producto
 *  - Eliminar productos individuales
 *  - Limpiar todo el carrito
 *  - Pagar y mostrar un mensaje de agradecimiento temporal
 *
 * Uso:
 * - Importar y usar dentro de cualquier componente envuelto con CartProvider.
 * - Depende del hook `useCart()` para acceder a los datos y funciones del carrito.
 */

import React, { useState } from "react";
import { useCart } from "../context/CartContext.jsx";

const CartDisplay = () => {
  //Extraer funciones y datos del carrito desde el contexto
  const { cart, removeFromCart, updateQuantity, clearCart, total } = useCart();

  //Estado local para mostrar mensaje de agradecimiento después del pago
  const [showThanks, setShowThanks] = useState(false);

  //Calcular total de items en el carrito (suma de cantidades)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  //Función que se ejecuta al hacer click en "Pagar"
  const handlePay = () => {
    clearCart(); // Vaciar el carrito
    setShowThanks(true); // Mostrar mensaje de agradecimiento
    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => setShowThanks(false), 3000);
  };

  return (
    <div className="cart-display">
      {/*Título del carrito con badge de número de productos */}
      <h2>
        Carrito de Compras
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </h2>

      {/*Mensaje de agradecimiento cuando se paga */}
      {showThanks && (
        <p className="thanks-msg">
          ¡Gracias por tu compra! 🎉
        </p>
      )}

      {/*Mensaje si el carrito está vacío y no se está mostrando el agradecimiento */}
      {cart.length === 0 && !showThanks && <p>El carrito está vacío.</p>}

      {/*Listado de productos en el carrito */}
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          {/*Botón para eliminar producto */}
          <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
            Eliminar
          </button>

          <p className="cart-item-info">
            {item.name} - $ {item.price} x
            {/*Input para cambiar la cantidad */}
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value))
              }
            />
            = ${item.price * item.quantity} {/* Subtotal del producto */}
          </p>
        </div>
      ))}

      {/*Total y acciones solo si hay productos */}
      {cart.length > 0 && (
        <>
          <p className="cart-total">
            <strong>Total:</strong> $ {total}
          </p>

          <div className="cart-actions">
            {/*Botón para limpiar todo el carrito */}
            <button className="clear-cart-btn" onClick={clearCart}>
              Limpiar carrito
            </button>

            {/*Botón de pagar */}
            <button className="pay-btn" onClick={handlePay}>
              Pagar
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDisplay;
