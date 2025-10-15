# Mini Ecommerce - React

Proyecto de prueba técnica para un ecommerce sencillo usando React.

## 🛠 Instalación y ejecución

1. **Clonar el repositorio**
```bash
git clone https://github.com/IV522/mini-ecommerce.git
cd mini-ecommerce

2. Instalar dependencias:
npm install

3. Correr el proyecto en modo desarrollo:
npm run dev

4. Correr backend mock (json-server) en puerto 5000
npx json-server --watch db.json --port 5000

5. Abrir el proyecto en el navegador:
Normalmente en: http://localhost:5173/

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
