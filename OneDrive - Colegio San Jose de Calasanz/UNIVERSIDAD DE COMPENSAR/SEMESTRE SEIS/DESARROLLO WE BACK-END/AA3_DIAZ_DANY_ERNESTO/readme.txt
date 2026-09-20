==================================================
=================================================
PROYECTO: DISPOSITIVOS INTELIGENTES - API REST
ESTUDIANTE : DANY ERNESTO DIAZ
ACTIVIDAD . 6
TRANSFERENCIA
======================================================
======================================================
1. DESCRIPCION DEL PROYECTO

    La aplicación es un API REST para gestionar el catalogo de dispositvios inteligentes. Permite crear, leer, actualizar y eliminar de forma remota.
	
2. TECNOLOGÍAS UTLIZADAS
  - Lenguaje de programación java 17
  - Framework : Jakarta REST (JAX-RS)
  - Servidor Backend : Apache Tomcat 10.1
  - Base de Datos: MySQl 8.0
  - IDE: Apache Netbeams 
  - Herramientas de pruebas: Postman

3. REQUSIITOS DE INSTALACION
  - Java JDK 17 o superior 
  - Apapche Tomcat 10.1
  - MySql 8.0 o superior
  - Netbeams IDE (Ulitma version)
  - Postman (verison desktop)

4. PASOS DE CONFIURACION

  4.1 Creación de la base de datos
    - Abrir MySql 
    - Ejecutar el scritp: dispositivos_inteligentes.sql
    - Verificar que se crearon las tablas 
	
  4.2 configuración del proyecto java
    - Abrir Netbeans 
    - Abrir el proyecto: dispositivos_inteligentes
    - COnfigurar el servidor Tomcat 
    - COmpilacion del proyecy (Build > Build project)
	
  4.3 Desplegar Tomcat
 
     4.3.1 Se dspliega el proyecto e netbeans
      -Click derecho sobre el proyecto 
      -Deploy (o build / deploy)
	  
     4.3.2 Localizar el archvio WAR generado
      - Se genera el archivo WAR     en target/dispositivos-inteligentes-1.0-SNAPSHOT.war
	  
     4.3.3 Copiar el archivo a tomcat
      - Copia el archivo WAR
      - Se pega el archivo en la ruta  c:\tomcat\webapps\
	  
     4.3.4 Reiniciar tomcaT
      -Si el servidor tomcat estas arriba lo detenemos con el comando  CTRL-C limpiamo la terminal con /clear dependeindo de la terminal q uee stemso utilizando.
      - Levantamos el servidor nuevamente .\Catalina run dev
      - esperamos el mensaje: "Server stratup"
	  
     4.3.5 Verificamos que este desplegado el servidor.
      - vamos al nevagador de preferencia y digitamos la siguiente url http://localhost:8000/
      - Veremos la aplicacion en el navegador.  
  
5 ENDPOINT DE LA API  
  
   - Obtiene los datos de los dispositivos
   GET @Path("api/dispositivos") 
   
    - Obtiene un dispositivos especific por id
   GET / RUTA: GET /api/dispositivos/{id}
      @GET
      @Path("{id}") 
      @Produces(MediaType.APPLICATION_JSON)
      public Dispositivo obtenerPorId(@PathParam("id") int id) {
          return service.obtenerPorId(id);
      }
   - Crea un nuevo dispositivo 
	  @POST
      @Consumes(MediaType.APPLICATION_JSON)
      @Produces(MediaType.APPLICATION_JSON)
      public Response crear(Dispositivo d) {
          boolean resultado = service.crear(d);
          if (resultado) {
              return Response.ok("{\"mensaje\":\"Dispositivo  creado\"}").build();
          } else {
              return Response.status(500).entity("{\"error\":\"Error al  crear\"}").build();
          }
      }
	- Actualiza un dispositivo existente
    @PUT
      @Path("{id}")
      @Consumes(MediaType.APPLICATION_JSON)
      @Produces(MediaType.APPLICATION_JSON)
      public Response actualizar(@PathParam("id") int id, Dispositivo d) {
          d.setId(id);
          boolean resultado = service.actualizar(d);
          if (resultado) {
              return Response.ok("{\"mensaje\":\"Dispositivo  actualizado\"}").build();
          } else {
              return Response.status(500).entity("{\"error\":\"Error al  actualizar\"}").build();
          }
      }
	  
    - Elimina un dispositivo por ID
  @DELETE
      @Path("{id}")
      @Produces(MediaType.APPLICATION_JSON)
      public Response eliminar(@PathParam("id") int id) {
          boolean resultado = service.eliminar(id);
          if (resultado) {
              return Response.ok("{\"mensaje\":\"Dispositivo  eliminado\"}").build();
          } else {
              return Response.status(500).entity("{\"error\":\"Error al  eliminar\"}").build();
          }	  
	  
	  
6. COMO PROBAR LA API

  6.1 Inicaaiaos el servidor tomcat si noesta activo paso 4.3.4 
	  
  6.2 Probamos en postman
	  
	  -Abrimos postman la aplicacion desktop
	  -Creamso una request
	  - URL : http://localhost:8080/dispositivos-inteligentes-1.0-SNAPSHOT/api/dispositivos
	  -Método 1: GET
	  - CLick : Send 
	  - Deberiamso de ver los dispositivos en JSON
	  
	  [
    {
        "id": 1,
        "nombre": "Samsung Galaxy S24 Ultra",
        "descripcion": "Teléfono premium actualizado",
        "precio": 1299.99,
        "fecha_lanzamiento": 1735707600000,
        "marca_id": 1,
        "categoria_id": 1
    },
    {
        "id": 2,
        "nombre": "iPhone 15 Pro",
        "descripcion": "iPhone premium con chip A17 Pro y cámara avanzada",
        "precio": 1099.99,
        "fecha_lanzamiento": 1695358800000,
        "marca_id": 2,
        "categoria_id": 1
    },
    {
        "id": 3,
        "nombre": "Dell XPS 13",
        "descripcion": "Laptop ultradelgada para profesionales",
        "precio": 1299.99,
        "fecha_lanzamiento": 1707541200000,
        "marca_id": 3,
        "categoria_id": 2
    },
    {
        "id": 4,
        "nombre": "Apple Watch Series 9",
        "descripcion": "Smartwatch con monitoreo de salud avanzado",
        "precio": 399.99,
        "fecha_lanzamiento": 1694494800000,
        "marca_id": 2,
        "categoria_id": 3
    },
    {
        "id": 6,
        "nombre": "Samsung Galaxy A54",
        "descripcion": "Smartphone de gama media con cámara 50MP",
        "precio": 449.99,
        "fecha_lanzamiento": 1735707600000,
        "marca_id": 1,
        "categoria_id": 1
    }
   ]
	  
	  
	  
   MÉTODO 2: Get obtener por id
		
	- URL: http://localhost:8080/dispositivos-inteligentes-1.0-SNAPSHOT/api/dispositivos/1
	-Click en send
	-Respoustas : JSON el dispotivo id 1 :
	  {
       "id": 1,
       "nombre": "Samsung Galaxy S24 Ultra",
       "descripcion": "Teléfono premium actualizado",
       "precio": 1299.99,
       "fecha_lanzamiento": 1735707600000,
       "marca_id": 1,
       "categoria_id": 1
      }

   MÉTODO 3: POST - Crear dispositivo.
   
   -Metodo POST
   - URL: http://localhost:8080/dispositivos-inteligentes-1.0-SNAPSHOT/api/dispositivos
   - Click en Body
   - Selecciona: raw
   - Selecciona: JSON
   - Pega esto:
	{
      "nombre": "Samsung Galaxy A54",
      "descripcion": "Smartphone de gama media",
      "precio": 449.99,
      "marca_id": 1,
      "categoria_id": 1
    }
   - Click send
   -Respuesta : {"mensaje: Dispositivo creado"}


   MÉTODO 4: PUT - Actualizar dispositivo
   - Método: PUT
   - URL: http://localhost:8080/dispositivos-inteligentes-1.0-SNAPSHOT/api/dispositivos/1
   - Click en Body
   - Selecciona: raw
   - Selecciona: JSON
   - Pega esto:
    {
      "nombre": "Samsung Galaxy S24 Ultra",
      "descripcion": "Teléfono premium actualizado",
      "precio": 1299.99,
      "marca_id": 1,
      "categoria_id": 1
     }
  - Click: Send
  - Respuesta: {"mensaje":"Dispositivo actualizado"}

  MÉTODO 5: DELETE - Eliminar dispositivo
   - Método: DELETE
   - URL: http://localhost:8080/dispositivos-inteligentes-1.0-SNAPSHOT/api/dispositivos/5
- Body: Déjalo VACÍO
- Click: Send
- Respuesta: {"mensaje":"Dispositivo eliminado"}

7. Estrcutra de archivos 


 src/main/java/com/ucompensar/dispositivos/
   ├── controller/       ← DispositivoController.java
   ├── dao/              ← DispositivoDAO.java
   ├── model/            ← Dispositivo.java
   ├── service/          ← DispositivoService.java
   └── util/             ← Utilidades

    database/             ← Script SQL de la BD
    target/              ← Donde se genera el WAR
    pom.xml              ← Configuración Maven
    README.md            ← Documentación
	  