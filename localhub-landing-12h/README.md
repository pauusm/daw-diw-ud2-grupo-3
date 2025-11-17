# LocalHub Landing — U.D. 2 (12 h) Estilos con Flexbox y Grid


**Objetivo**: landing one-page responsive y accesible. **Grid** para macro-layout (elige UNA técnica: áreas _o_ auto-fit/minmax). **Flexbox** para nav y tarjetas. **2 puntos de corte** (libres). Accesibilidad AA básica. _Opcional_: micro‑Sass.


## Estructura
```
/localhub-landing-12h/
├─ index.html
├─ css/
├─ sass/
├─ img/
└─ styleguide.md
```


## Flujo de trabajo recomendado
- S1: Skeleton + Grid macro.
- S2: Flex micro (nav + cards) + 1er breakpoint.
- S3: Accesibilidad + validación + 2º breakpoint.
- S4: Afinado visual + documentación + demo (5').


## Requisitos mínimos
- Responsive con **2 breakpoints** (libres).
- Grid:  **auto-fit/minmax**
- Flex: nav + cards.
- Accesibilidad AA: contraste, `:focus-visible`, `alt`, labels y teclado.
- Validación HTML/CSS (adjunta evidencias en forma de pantallazo junto con la entrega).
- Documentación breve: `README.md`, `styleguide.md`, **2 capturas** (móvil y escritorio).


## Mejora 1 (opcional)
- Tema claro/oscuro con Custom Properties + tipografía fluida `clamp()`.

## Mejora 2 (opcional) — micro‑Sass
- Solo `sass/_variables.scss`, `sass/_mixins.scss` y `sass/main.scss` con 1 mixin de breakpoint. Compila a `css/main.css` con **VSCode Live Sass Compiler**.

---

## Descripción del proyecto y decisiones de diseño
- Añadimos **3 variables adicionales** para mejorar la consistencia del diseño: `--radius`, `--max-width` y espaciados adicionales: `--space-4`.
- Se definieron **3 columnas en el grid principal**: la columna central contiene el contenido y las columnas laterales funcionan como márgenes fluidos.
- Decidimos no usar `grid-template-areas` en el layout principal porque es mas sencillo y requiere de menos código utilizar `minmax()`, con esto también evitamos definir nombres a cada sección.
- Se utilizó **Flexbox** como micro-layout, nos pareció más útil para elementos lineales o componentes pequeños (header, formulario, contenido de las tarjetas), dejando **Grid** para la estructura global de la página.
- En el formulario, **Flexbox** permitió apilar los inputs con el mismo espaciado; en el header permitió colocar el **logo** a la izquierda y el **nav** a la derecha sin complicaciones.
- El uso de **`auto-fit` junto con `minmax()`** en las tarjetas ayuda a colocar automáticamente tantas columnas como quepan garantizando que ninguna tarjeta sea más pequeña que, este caso, `18rem`.

Si sobrase espacio, las tarjetas crecen y se distribuyen de forma equilibrada.

## Guía de ejecución SASS

### 1. Requisitos previos

Antes de comenzar, debemos de tener instalado:

- **Visual Studio Code**
- Extensión **Live Sass Compiler**  
- Extensión **Live Server** (opcional pero recomendado).

### 2. Estructura del proyecto
```
/localhub-landing-12h/
├─ css
    └─ main1.css (Cambiamos de nombre para diferenciarlo del archivo generado por SASS)
├─ sass/
    ├─ _mixins.scss
    ├─ _variables.scss
    ├─ main2.scss (Cambiamos de nombre para el nuevo archivo .css generado)
```
El archivo **editable**:  
`sass/main2.scss`

El archivo **compilado** automáticamente:  
`css/main2.css`

### 3. Cómo abrir el proyecto

1. Abre Visual Studio Code
2. Ve a **File → Open Folder…**
3. Selecciona la carpeta del proyecto

### 4. Configuración de compilación Sass → CSS

1. Abrir configuración JSON
2. En VS Code, presiona:

`Ctrl + Shift + P → “Preferences: Open Settings (JSON)”`

3. Agrega o revisa que existan las siguientes líneas:

```
"liveSassCompile.settings.formats": [
  {
    "format": "expanded",
    "extensionName": ".css",
    "savePath": "/css"
  }
],
"liveSassCompile.settings.generateMap": true
```

### 5. Compilar Sass a CSS

1. En la barra inferior de VS Code haz clic en:

**“Watch Sass”**

Automáticamente se generarán:

`/css/main.css
/css/main.css.map`

Cada vez que guardes (Ctrl + S) cualquier archivo .scss, la hoja de estilos se recompilará.

## Checklist (resumen)

### HTML & Semántica
- ✅ HTML **válido** (validator W3C). Un único `h1` por vista.
- ✅ Landmarks (`header`, `nav`, `main`, `footer`) correctos.
- ✅ Formularios con `label` y `required` (cuando proceda).
- ✅ Imágenes con `alt` significativo; decorativas con `aria-hidden="true"`.

### Accesibilidad AA
- ✅ Contraste AA verificado.
- ✅ Foco visible (`:focus-visible`).
- ✅ Navegación solo con teclado sin trampas de foco.

### CSS & Layout
- ✅ Hojas externas; sin `!important` abusivo; comentarios aclaratorios.
- ✅ **Grid**: **auto-fit/minmax**.
- ✅ **Flex**: nav y tarjetas.
- ✅ **Responsive** con **2 breakpoints**; sin desbordamientos.

### Documentación
- ✅ `styleguide.md` actualizado (paleta, tipografía, espaciado, 2 componentes).
- ✅ `README.md` con decisiones y evidencias (validadores, capturas).
- ✅ **7 capturas** (móvil, escritorio, responsive, validadores, temas) en `img/`.


## Uso de IA
- Uso de chatGPT para recordar como usar GITHUB
- Ayuda para entender bien el uso del grid y flex y porque no se nos colocaban bien las tarjetas de servicios.
- Revisión de código para evitar en lo posible, errores


## Evidencias
Todas las capturas de evidencia están en la carpeta de imágenes (`img/`)


## Roles
- Paula: Estilos y Accesibilidad: Responsive, Mejora 1
- Renzo: Maquetación : Grid y Flex, Mejora 2


