/**
 * CartIcon.jsx
 * -----------------
 * Ícono flotante del carrito con animación y estilo moderno.
 *
 * Funcionalidades:
 * - Mostrar la cantidad total de productos en un badge animado
 * - Al hacer clic, abre un popup flotante con el carrito (CartDisplay)
 * - Overlay semitransparente detrás del carrito
 * - Cierra el carrito al hacer clic fuera
 * - Permite ser controlado desde otro componente mediante `ref` (p. ej., CartSummary)
 */

import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { useCart } from "../context/CartContext.jsx";
import CartDisplay from "./CartDisplay.jsx";

// forwardRef permite exponer funciones hacia afuera (para abrir el carrito desde otro componente)
const CartIcon = forwardRef((props, ref) => {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false); // estado de visibilidad del carrito
  const cartRef = useRef(null);

  //exponer función openCart para abrir el carrito desde otros componentes
  useImperativeHandle(ref, () => ({
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    toggleCart: () => setIsOpen(prev => !prev),
  }));

  //Total de productos en el carrito
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  //Cerrar carrito si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/*Overlay semitransparente cuando el carrito está abierto */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)", 
            zIndex: 10,
          }}
        />
      )}

      {/*Ícono flotante del carrito */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          fontSize: "28px",
          cursor: "pointer",
          zIndex: 30,
          backgroundColor: "#fff",
          padding: "10px",
          borderRadius: "50%",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        🛒
        {totalItems > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              backgroundColor: "#e74c3c",
              color: "#fff",
              borderRadius: "50%",
              padding: "2px 7px",
              fontSize: "14px",
              fontWeight: "bold",
              animation: "badge-pop 0.3s ease",
            }}
          >
            {totalItems}
          </span>
        )}
      </div>

      {/*Popup del carrito flotante */}
      {isOpen && (
        <div
          ref={cartRef}
          style={{
            position: "fixed",
            top: "70px",
            right: "20px",
            width: "350px",
            maxHeight: "80vh",
            overflowY: "auto",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            padding: "15px",
            zIndex: 20,
          }}
        >
          <CartDisplay />
        </div>
      )}

      {/*Animación para el badge */}
      <style>
        {`
          @keyframes badge-pop {
            0% { transform: scale(0); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </>
  );
});

export default CartIcon;
