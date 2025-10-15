# Mini Ecommerce - React
Proyecto de prueba técnica para un ecommerce sencillo usando React.

⚠️ Notas importantes
Frontend y backend por separado: json-server y Vite deben correr en terminales distintas.
Cambiar puerto: si algún puerto está ocupado, puedes usar otro en json-server (--port 5001) y actualizar la URL en ProductList.jsx.
Problemas de cache o navegador: si la app no carga, prueba abrir en ventana de incógnito o usar 127.0.0.1 en lugar de localhost.

## 🛠 Instalación y ejecución

Instalar requisitos previos
Asegúrate de tener instalados:
Node.js(v18+ recomendado) → incluye npm
Git → para clonar el repositorio
Comprueba las versiones:
node -v
npm -v
git --version

1. **Clonar el repositorio**
```bash
git clone https://github.com/IV522/mini-ecommerce.git
cd mini-ecommerce

⚠️ Importante: Todos los comandos de npm (install, run dev, test) deben ejecutarse dentro de esta carpeta, donde se encuentra package.json.

2. Instalar dependencias:
npm install

3. Correr el backend mock (json-server)
Abre una terminal nueva y ejecuta: npx json-server --watch db.json --port 5000
Verifica que funcione abriendo: http://localhost:5000/products

4. Correr el proyecto en modo desarrollo (frontend)
En otra terminal (manteniendo abierta la del backend), ejecuta: npm run dev

CUANDO TERMINES TODOS LOS PASOS EL PROYECTO ESTARA DISPONIBLE EN: http://localhost:5173

🧪 Pruebas unitarias

Se incluyen tests usando Jest y React Testing Library.

Ejecutar tests:
npm run test
Estado actual: Todos los tests pasan correctamente.

💡 Funcionalidades

Listado de productos desde un JSON mock.
Carrito con cantidad editable y cálculo de total.
Acción de pago con mensaje de agradecimiento.
Persistencia opcional usando localStorage.
Uso de hooks para manejo de estado global y efectos secundarios.
Extras opcionales cubiertos:
Pruebas unitarias básicas adicionales.
Diseño de hooks eficiente y limpio.

**DESCRIPCION AMPLIADA**
El proyecto Mini Ecommerce React es una aplicación de comercio electrónico desarrollada como prueba técnica, construida completamente en React sin necesidad de un backend real.
Su objetivo principal es demostrar competencias en manejo de estado global, estructura modular de componentes, persistencia de datos, y buenas prácticas en desarrollo frontend.

El proyecto incluye las siguientes características principales:
- Listado de productos dinámico: Los productos se obtienen desde un backend mock usando json-server. Cada producto muestra imagen, nombre, precio y un botón “Agregar al carrito”. Implementado en ProductList.jsx.
- Carrito de compras completo: Permite agregar productos, editar cantidades, eliminar productos y ver subtotales por producto y total general. La funcionalidad se gestiona mediante un contexto global (CartContext.jsx) y los componentes CartIcon.jsx, - CartDisplay.jsx, CartSummary.jsx y CartItem.jsx.
- Acción de pago funcional: Al realizar el pago, el carrito se limpia automáticamente y se muestra un mensaje de agradecimiento al usuario. Implementado en CartPage.jsx y CartSummary.jsx.

Persistencia con LocalStorage:
El contenido del carrito se mantiene al recargar la página gracias al contexto global y a la integración con localStorage.

Backend mock con JSON-Server:
El backend simulado corre en http://localhost:5000/products
 y permite un fetch dinámico de productos. Se puede ajustar el puerto en caso de conflictos.

Uso correcto de React Hooks:
Se emplean useState, useEffect, useContext y useRef para manejar estado, efectos y acceso global al carrito, siguiendo buenas prácticas de React.

Diseño moderno y animaciones:
La interfaz incluye carrito flotante, overlay, badge animado, bordes redondeados y efectos fade-in, proporcionando una experiencia de usuario clara y atractiva.

Pruebas unitarias:
Se incluyen tests con Jest y React Testing Library para CartContext, CartSummary y ProductList. Todas las pruebas pasan al 100%, verificando funcionalidades críticas como addToCart, removeFromCart, updateQuantity, clearCart y cálculo de totales.

📌 Autor
Jorge Iván González
Repositorio: https://github.com/IV522/mini-ecommerce
