/**
 * Componente CartItem
 * -------------------
 * Representa un producto dentro del carrito de compras.
 * Permite:
 * - Mostrar nombre y precio
 * - Editar la cantidad
 * - Mostrar subtotal (precio * cantidad)
 * - Eliminar el producto del carrito
 *
 * Props:
 * - item: objeto con { id, name, price, image, quantity }
 * - onUpdate: función para actualizar la cantidad
 * - onRemove: función para eliminar el producto del carrito
 */

export default function CartItem({ item, onUpdate, onRemove }) {
  return (
    <div className="cart-item" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
      
      {/* Información del producto */}
      <div className="ci-left">
        <strong>{item.name}</strong>
        <div>Precio: ${item.price}</div>
      </div>

      {/* Controles para cantidad y eliminar */}
      <div className="ci-right" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => onUpdate(item.id, e.target.value)}
          style={{ width: '50px' }}
        />
        <div>Subtotal: ${item.price * item.quantity}</div>
        <button onClick={() => onRemove(item.id)}>Eliminar</button>
      </div>
    </div>
  );
}
