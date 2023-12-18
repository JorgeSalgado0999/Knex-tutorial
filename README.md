# Express Application with Knex and PostgreSQL

## Descripción

Esta es una aplicación de backend construida con Express y Knex, que proporciona una API para manejar notas. Utiliza PostgreSQL como sistema de gestión de bases de datos.

## Configuración del Entorno

Antes de ejecutar la aplicación, asegúrate de tener instalado PostgreSQL y Node.js. Necesitarás configurar las siguientes variables de entorno:

- `DATABASE_URL`: URL de conexión a tu base de datos PostgreSQL.

Puedes configurar estas variables en un archivo `.env` en la raíz del proyecto.

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```bash
npm install
```

## Ejecución

Para correr el proyecto ejecuta:

```bash
npm start
```

## API Endpoints

The API provides the following endpoints:

### POST /notes

- **Description**: Creates a new note.
- **Request Body**: JSON with `title` and `content`.

### GET /notes

- **Description**: Retrieves a list of all notes.

### GET /notes/:id

- **Description**: Retrieves a specific note by its ID.
- **Parameters**: `id` of the note.

### PUT /notes/:id

- **Description**: Updates a specific note by its ID.
- **Parameters**: `id` of the note.
- **Request Body**: JSON with `title` and/or `content`.

### DELETE /notes/:id

- **Description**: Deletes a specific note by its ID.
- **Parameters**: `id` of the note.
