# 🐦 BirdWatch Argentina + Biodiversity Explorer

🇦🇷 **Español** · 🇬🇧 **English**

---

## 🇦🇷 Español

Plataforma web para explorar y visualizar información sobre **aves y biodiversidad de Argentina**, combinando datos provenientes de APIs públicas con información almacenada y procesada por la propia aplicación.

El proyecto busca crear una herramienta interactiva para descubrir especies, consultar información sobre su distribución y, progresivamente, incorporar observaciones y estadísticas relacionadas con la biodiversidad argentina.

El proyecto también funciona como una aplicación práctica para desarrollar y demostrar conocimientos de **desarrollo Full Stack**, integración de APIs externas, bases de datos y visualización de información.

### 🛠️ Tecnologías

#### Frontend

* React
* React Router
* TanStack Query
* Axios
* Leaflet
* CSS / Tailwind CSS

#### Backend

* Node.js
* Express
* TypeScript
* Zod
* JWT

#### Base de datos

* MySQL
* Sequelize

#### Herramientas

* Git
* GitHub
* Docker
* Docker Compose

#### APIs y fuentes de datos

Se evaluará la integración de APIs y fuentes públicas relacionadas con biodiversidad, especies y observaciones, como:

* GBIF
* eBird
* iNaturalist
* Wikimedia Commons

### 📄 Licencia

Este proyecto está bajo la **MIT License**.

La licencia MIT aplica al código desarrollado para este proyecto. Los datos, imágenes y demás contenidos obtenidos mediante APIs o fuentes externas pueden estar sujetos a sus propias licencias y términos de uso.

### 🐳 Desarrollo local con Docker

Desde `birdwatch-argentina-backend`:

```bash
docker compose up --build
```

La API estará disponible en `http://localhost:3000` y MySQL en `localhost:3306`. La base de datos se conserva en el volumen `mysql_data` y se inicializa con `src/db/schema.sql` en el primer arranque.

Para detener los servicios:

```bash
docker compose down
```

Para eliminar también los datos locales:

```bash
docker compose down -v
```

Las credenciales y puertos se pueden configurar mediante un archivo `.env` dentro de `birdwatch-argentina-backend`, usando `.env.example` como referencia.

---

## 🇬🇧 English

A web platform for exploring and visualizing information about **birds and biodiversity in Argentina**, combining data from public APIs with information stored and processed by the application itself.

The project aims to provide an interactive tool for discovering species, exploring their distribution, and progressively incorporating observations and statistics related to Argentine biodiversity.

The project also serves as a practical application for developing and demonstrating **Full Stack development** skills, external API integration, database management, and data visualization.

### 🛠️ Technologies

#### Frontend

* React
* React Router
* TanStack Query
* Axios
* Leaflet
* CSS / Tailwind CSS

#### Backend

* Node.js
* Express
* TypeScript
* Zod
* JWT

#### Database

* MySQL
* Sequelize

#### Tools

* Git
* GitHub
* Docker
* Docker Compose

#### APIs and Data Sources

The project will evaluate the integration of public APIs and data sources related to biodiversity, species, and observations, such as:

* GBIF
* eBird
* iNaturalist
* Wikimedia Commons

### 📄 License

This project is licensed under the **MIT License**.

The MIT License applies to the code developed for this project. Data, images, and other content obtained through external APIs or sources may be subject to their own licenses and terms of use.
