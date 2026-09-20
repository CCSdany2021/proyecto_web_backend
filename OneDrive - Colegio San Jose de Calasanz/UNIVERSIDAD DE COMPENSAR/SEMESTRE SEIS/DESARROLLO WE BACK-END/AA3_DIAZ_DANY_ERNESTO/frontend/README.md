# Dispositivos Inteligentes — Frontend

Esta es la parte visual de la tienda de dispositivos inteligentes: lo que el usuario realmente ve y usa en el navegador. Muestra el catálogo de productos, permite filtrar por marca, categoría y precio, y ver el detalle de cada dispositivo junto con sus comentarios.

## Con qué se hizo

- **React** (versión 19) para construir las pantallas.
- **HTML, CSS y JavaScript** como base de todo.
- No usa base de datos propia — todos los datos los pide "prestados" al backend.

## Cómo se conecta con los datos

Este proyecto no guarda ni tiene acceso directo a ninguna base de datos. En vez de eso, se conecta al **backend** (el otro proyecto, hecho en Java) a través de una **API REST**: le pide los datos por internet usando una función llamada `fetch`, el backend los busca en MySQL, y se los devuelve. El frontend solo se encarga de mostrarlos de forma ordenada y bonita.

En resumen: **Frontend (lo que se ve) → pide datos → Backend (Java) → busca en → Base de datos (MySQL)**.

## Pantallas

- **Listado**: muestra todos los dispositivos disponibles, con filtros por marca, categoría y precio.
- **Detalle**: al hacer clic en un dispositivo, se ve su información completa y los comentarios que tiene.
- **Comentarios**: formulario para agregar un nuevo comentario a un dispositivo.

## Cómo ejecutarlo

1. Tener instalado Node.js.
2. Asegurarse de que el backend ya esté corriendo (ver su propio README).
3. Dentro de esta carpeta:
   ```
   npm install
   npm start
   ```
4. Se abre solo en el navegador en `http://localhost:3000`.

## Estado actual

- El botón "Aplicar Filtros" todavía no filtra realmente la lista.
- El formulario de comentarios todavía no guarda el comentario en la base de datos, solo lo muestra en pantalla.
