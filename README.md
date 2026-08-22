# Dispositivos Inteligentes — Backend

API REST en Jakarta EE (JAX-RS / Jersey) para un catálogo de dispositivos inteligentes, marcas, categorías y comentarios, respaldada por MySQL.

## Stack

- Java 17 + Maven
- Jakarta EE 11 · JAX-RS (Jersey 3.1) + Jackson para JSON
- Apache Tomcat 10.1
- MySQL

## Requisitos previos

- JDK 17+
- Maven 3.9+
- Apache Tomcat 10.1+
- MySQL 8/9 corriendo en `localhost:3306`

## 1. Importar la base de datos

```bash
mysql -u root -p < database/dispositivos_inteligentes.sql
```

Esto crea la base `dispositivos_inteligentes` con sus 4 tablas (`dispositivos`, `marcas`, `categorias`, `comentarios`) y datos de ejemplo.

## 2. Configurar la conexión

Edita `src/main/java/com/ucompensar/dispositivos/util/Conexion.java` con el usuario/contraseña de tu MySQL local:

```java
private static final String USER = "root";
private static final String PASSWORD = "tu_password_aqui";
```

## 3. Compilar y desplegar

```bash
mvn clean package
```

Copia el WAR generado (`target/dispositivos-inteligentes-1.0-SNAPSHOT.war`) a la carpeta `webapps/` de Tomcat y arráncalo.

## 4. Probar

Abre en el navegador:

```
http://localhost:8080/dispositivos-inteligentes-1.0-SNAPSHOT/api/dispositivos
```

Debe responder JSON con la lista de dispositivos.

## Endpoints

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/dispositivos` | Lista de dispositivos |
| GET | `/api/dispositivos/{id}` | Un dispositivo por id |
| GET | `/marcas` | Lista de marcas |
| GET | `/categorias` | Lista de categorías |
| GET | `/comentarios` | Lista de comentarios |

## Estructura

```
src/main/java/com/ucompensar/dispositivos/
├── controller/   → RestApplication, *Controller (JAX-RS)
├── service/      → *Service
├── dao/          → *DAO (JDBC)
├── model/        → Dispositivo, Marca, Categoria, Comentario
├── filter/       → CorsFilter (habilita CORS para el frontend)
└── util/         → Conexion
```

## Frontend

El cliente que consume esta API vive en un proyecto separado: `dispositivos-inteligentes-frontend`.
