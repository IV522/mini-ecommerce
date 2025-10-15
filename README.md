# Mini Ecommerce - React
Proyecto de prueba técnica para un ecommerce sencillo usando React.

⚠️ Notas importantes
Frontend y backend por separado: json-server y Vite deben correr en terminales distintas.
Cambiar puerto: si algún puerto está ocupado, puedes usar otro en json-server (--port 5001) y actualizar la URL en ProductList.jsx.
Problemas de cache o navegador: si la app no carga, prueba abrir en ventana de incógnito o usar 127.0.0.1 en lugar de localhost.

## 🛠 Instalación y ejecución

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

📌 Autor
Jorge Iván González
Repositorio: https://github.com/IV522/mini-ecommerce
