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




## Capturas comentadas y justificacion Gestalt

Esta seccion sirve como apoyo visual para justificar la aplicacion de las Leyes de Gestalt en la interfaz.

### Ley de Proximidad

La ley de proximidad se aplica cuando varios elementos relacionados se agrupan dentro de una misma zona visual, haciendo que el usuario los perciba como parte de una misma funcion.

En Serenity Hub puede justificarse en dos zonas principales:

- el panel de filtros de la vista `Resources`, donde buscador, ordenacion y filtro por autor aparecen dentro de un mismo bloque
- el conjunto de tarjetas de categorias de la pagina principal, presentadas como una region comun

![Filtros de la vista Resources](/src/utils/panel_de_filtros.png)  

 En esta captura se observa la Ley de Proximidad, ya que los controles de busqueda, ordenacion y filtrado aparecen agrupados en un mismo contenedor visual. Esa cercania hace que el usuario entienda que todos forman parte del mismo sistema de refinado de resultados.

### Ley de Similitud

La ley de similitud se aprecia cuando varios elementos comparten forma, color, estructura o comportamiento, y por eso el usuario los interpreta como equivalentes.

En Serenity Hub se refleja sobre todo en:

- las tarjetas de categoria de `Home`, que comparten estructura, tipografia, espaciado y efecto hover
- las tarjetas y contenedores principales, que reutilizan bordes, radios y sombras coherentes

![Tarjetas de categorias en la vista Home](/src/utils/categorias.png)

> En esta imagen se aprecia la Ley de Similitud porque las tres tarjetas de categoria usan la misma composicion visual, los mismos patrones de color y una respuesta interactiva equivalente. Esto permite identificarlas rapidamente como opciones del mismo nivel.

### Ley de Continuidad

Tambien puede mencionarse la ley de continuidad en la pagina principal, donde la linea SVG decorativa dirige la mirada del usuario a traves del bloque de categorias.

![Línea SVG que conecta las tarjetas de categorías en Home](/src/utils/linea_svg.png)

> La linea visual que acompana la zona de categorias favorece la continuidad porque guia la mirada del usuario a traves de la composicion y refuerza la sensacion de recorrido dentro de la pagina.


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
- La pagina principal mantiene los blobs decorativos y la linea SVG, pero prescinde de una imagen de fondo agregada inicialmente para conseguir un diseño mas limpio.
