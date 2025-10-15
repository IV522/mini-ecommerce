/**
 * Componente ProductCard
 * ---------------------
 * Este componente representa una tarjeta de producto individual.
 * Muestra la imagen, el nombre, el precio y un botón para agregar el producto al carrito.
 *
 * Props:
 * - product: objeto que contiene { id, name, price, image }
 * - onAdd: función que se ejecuta cuando se hace clic en "Agregar al carrito"
 *
 * Funcionalidades:
 * - Mostrar producto de forma visual
 * - Agregar producto al carrito al hacer clic en el botón
 */

export default function ProductCard({ product, onAdd }) {
  return (
    <div
      className="card"
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        margin: '10px',
        textAlign: 'center',
        width: '180px',
      }}
    >
      {/* Imagen del producto */}
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          width="150"
          style={{ marginBottom: '10px', borderRadius: '5px' }}
        />
      )}

      {/* Nombre del producto */}
      <h3>{product.name}</h3>

      {/* Precio del producto */}
      <p>Precio: ${product.price}</p>

      {/* Botón para agregar al carrito */}
      <button
        onClick={() => onAdd(product)}
        style={{
          padding: '8px 12px',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#007bff',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
