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

## Checklist (resumen)
## HTML & Semántica
- ✅ HTML **válido** (validator W3C). Un único `h1` por vista.
- ✅ Landmarks (`header`, `nav`, `main`, `footer`) correctos.
- ✅ Formularios con `label` y `required` (cuando proceda).
- ✅ Imágenes con `alt` significativo; decorativas con `aria-hidden="true"`.

## Accesibilidad AA
- ✅ Contraste AA verificado.
- ✅ Foco visible (`:focus-visible`).
- ✅ Navegación solo con teclado sin trampas de foco.

## CSS & Layout
- ✅ Hojas externas; sin `!important` abusivo; comentarios aclaratorios.
- ✅ **Grid**: **auto-fit/minmax**.
- ✅ **Flex**: nav y tarjetas.
- ✅ **Responsive** con **2 breakpoints**; sin desbordamientos.

## Documentación
- ✅ `styleguide.md` actualizado (paleta, tipografía, espaciado, 2 componentes).
- ✅ `README.md` con decisiones y evidencias (validadores, capturas).
- ✅ **7 capturas** (móvil, escritorio, responsive, verificaciones, temas). ------> 

## Uso de IA
- Uso de chatGPT para recordar como usar GITHUB
- Ayuda para entender bien el uso del grid y flex y porque no se nos colocaban bien las tarjetas de servicios.
- Revisión de código para evitar en lo posible, errores

## Descripción proyecto y decisiones
-Añadimos 3 variables adicionales 
- Se definió 3 columnas en el grid, la columna central contiene el contenido y las columnas laterales actúan de márgenes.
- No usamos grid template areas en el layout principal porque es mas sencillo y requiere de menos código utilizar minmax(), evitamos definir nombres a cada sección. 
- Flexbox con micro layout nos pareció mas útil para elementos lineales y componentes más pequeños y dejar Grid para el esqueleto global.
En el formulario flex nos facilitó que los inputs se apilen con el mismo espaciado, en el header permite colocar el logo a la izquierda y el nav a la derecha....
- uto-fit con minmax() en las tarjetas ayuda a colocar automáticamente tantas columnas como quepan asegurando que ninguna tarjeta sea más pequeña de, este caso, 18rem. 
Si sobrase espacio e, las tarjetas crecen y se distribuyen de forma equilibrada.


## CAPTURAS
Todas las capturas están en la carpeta de imágenes

## ROLES
- Paula: Estilos y accesibilidad: Responsive, Mejora 1
- Renzo: Maquetación : Grid y flex, Mejora 2


