/**
 * ProductList.jsx
 * -----------------
 * Componente que lista productos desde un backend mock (json-server)
 * y permite agregarlos al carrito usando useCart().
 *
 * Cambios principales respecto a la versión original:
 * 1. Eliminamos la lista de productos estática y usamos useEffect + fetch.
 * 2. Traemos los productos desde http://localhost:5000/products.
 * 3. Mantenemos la estructura visual y la función addToCart.
 */

import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext.jsx";

const ProductList = () => {
  const { addToCart } = useCart(); // Función para agregar productos al carrito
  const [products, setProducts] = useState([]); // Estado para guardar productos traídos de la API
  const [loading, setLoading] = useState(true); // Estado para mostrar mientras se cargan los productos
  const [error, setError] = useState(null);     // Estado para manejar errores de fetch

  // useEffect se ejecuta una vez al montar el componente
  useEffect(() => {
    // Llamada al backend mock
    fetch("http://localhost:5000/products")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar productos");
        return res.json();
      })
      .then((data) => {
        setProducts(data);   // Guardar productos en el estado
        setLoading(false);   // Fin de carga
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Mostrar mensaje de carga o error si aplica
  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>PRODUCTOS</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">

            {/* Contenedor de la imagen para overlay */}
            <div className="image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              {product.description && (
                <div className="image-overlay">{product.description}</div>
              )}
            </div>

            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
