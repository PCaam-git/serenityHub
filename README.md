# Serenity Hub

Serenity Hub es un proyecto educativo desarrollado con React, TypeScript y Vite.
Consiste en una aplicacion web de una sola pagina orientada a la consulta de recursos relacionados con el bienestar y la salud mental.

## Descripcion general

La aplicacion permite:

- mostrar una frase diaria obtenida desde una API en la pagina principal
- navegar entre distintas vistas mediante rutas
- consultar un listado de recursos cargados desde una API externa
- buscar recursos por texto
- filtrar recursos por autor
- ordenar los resultados alfabeticamente
- acceder al detalle de cada recurso mediante una ruta dinamica
- cambiar entre tema claro y oscuro y conservar la preferencia

## Tecnologias utilizadas

- React 19
- TypeScript
- Vite
- React Router DOM
- CSS con variables globales y clases reutilizables

## APIs utilizadas

### Advice Slip API

Se utiliza en la pagina principal para mostrar la frase diaria.

- `https://api.adviceslip.com/advice`

### Open Library API

Se utiliza para cargar la lista de recursos y la pagina de detalle.

- `https://openlibrary.org/subjects/:category.json?limit=20`
- `https://openlibrary.org/works/:id.json`
- `https://covers.openlibrary.org/b/id/:coverId-M.jpg`

## Estructura de la aplicacion

### Home

La pagina principal incluye:

- un mensaje de bienvenida
- una frase diaria obtenida desde API
- estados de carga y error para esa llamada
- accesos directos por categoria

### Resources

La pagina de recursos incluye:

- carga de datos desde Open Library
- busqueda por texto
- filtro por autor
- ordenacion A-Z y Z-A
- contador de resultados
- mensaje cuando no hay coincidencias

### Resource Detail

La vista de detalle:

- utiliza una ruta dinamica con `id`
- muestra titulo, portada y descripcion del recurso

### 404

La aplicacion incluye una vista para rutas no existentes.

## Componentes reutilizables

El proyecto utiliza, entre otros, estos componentes funcionales reutilizables:

- `Header`
- `Navigation`
- `Footer`
- `Title`
- `ResourceCard`
- `LoadingSpinner`
- `ErrorMessage`

## Sistema de tema

La aplicacion incorpora un cambio entre tema claro y oscuro.

Su funcionamiento es el siguiente:

- la preferencia del usuario se guarda en `localStorage`
- se aplica la clase `dark-mode` al elemento `body`
- las variables CSS actualizan los colores globales de la interfaz

## Estructura del proyecto

src/
  components/
  pages/
  App.tsx
  index.css
  main.tsx


## Instalacion

Si utilizas pnpm:

pnpm install


Si prefieres npm:

npm install


## Scripts disponibles

Iniciar el entorno de desarrollo:

pnpm run dev


Generar la build de produccion:

pnpm build




## Cumplimiento de requisitos AA1

### Funcionalidades obligatorias

1. `Cumple`:
   La aplicacion consume 3 endpoints distintos y gestiona estados de carga y error en las llamadas principales.
   - `https://api.adviceslip.com/advice`
   - `https://openlibrary.org/subjects/:category.json?limit=20`
   - `https://openlibrary.org/works/:id.json`

2. `Cumple`:
   Existe navegacion con React Router, una ruta dinamica `/resources/:id` y una cabecera de navegacion reutilizable y visible en todas las vistas.

3. `Cumple`:
   La vista de recursos incorpora busqueda por texto, filtro por autor y ordenacion ascendente/descendente sin boton de envio.

4. `Cumple`:
   El proyecto usa al menos 7 componentes funcionales reutilizables (`Header`, `Navigation`, `Footer`, `Title`, `ResourceCard`, `LoadingSpinner`, `ErrorMessage`) y mantiene una estructura organizada en `components`, `pages` y `utils`.

5. `Cumple con observacion`:
   En la interfaz se aplican al menos dos Leyes de Gestalt, especialmente Proximidad y Similitud. La justificacion aparece en la documentacion de defensa, pero en este repositorio no hay capturas incluidas como evidencia, por lo que conviene anadirlas en la entrega final.

### Funcionalidades extra

1. `Cumple`:
   Hay evidencia de trabajo con Git y una estructura compatible con Gitflow (`main`, `develop` y varias ramas `feature/*`).

2. `Cumple`:
   La aplicacion implementa modo claro/oscuro global y guarda la preferencia en `localStorage`.

3. `Cumple`:
   La interfaz da retroalimentacion inmediata con contador de resultados y mensaje cuando la lista queda vacia.

4. `No cumple`:
   No hay un formulario complejo con libreria externa como React Hook Form o Formik.

5. `No cumple`:
   No hay una integracion interactiva adicional con un servicio externo del tipo Cloudinary, mapas o similar.

## Objetivos academicos trabajados

Este proyecto sirve para practicar:

- desarrollo basado en componentes con React
- enrutado en una SPA
- rutas dinamicas
- consumo de APIs
- manejo de estados de carga y error
- reutilizacion de componentes
- filtrado y ordenacion de datos
- persistencia de preferencias con `localStorage`

## Notas

- El proyecto esta planteado para ser sencillo, legible y facil de explicar en un contexto academico.
- La pagina principal mantiene los blobs decorativos y la linea SVG, pero prescinde de la imagen de fondo para conseguir un diseño mas limpio.
