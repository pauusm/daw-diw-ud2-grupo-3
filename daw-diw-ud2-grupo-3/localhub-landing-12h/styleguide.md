# Guía de estilos — LocalHub (12 h)

## Paleta
- Texto: Claro `#111111` / Oscuro `#111111`
- Fondo: Claro `#ffffff` / Oscuro `#0b1020`
- Tarjetas: → añadido en **Mejora 2 (SASS)**
  - Fondo: Claro `#f9fafb` 
  - Bordes: Claro `#e5e7eb` / Oscuro `#1f2937`
- Brand: Claro `#1e293b` / Oscuro `#f9fafb` → añadido en **Mejora 2 (SASS)**
- Acento: `#0ea5e9`

--` #084c8a`; - Para reforzar el hover
--` #0a74b8` Para mayor contraste en el modo claro 
--#1877d0; un azul más claro que ` #0a74b8` para resaltar el botón cuando lo van a seleccionar en el modo oscuro 
--` #111827` fondo para las tarjetas en modo oscuro para que tenga contraste con el fondo y se vean bien.
--  ` #1f2937` borde un poco mas oscuro para las tarjetas en el modo oscuro  para que resalten y se diferencien bien.

-- `#e8e8e8` y `#dfdfdf` blancos no demasiado blancos en el modo oscuro para que el contraste no sea demasiado y haya más armonía.


## Tipografía
- Base: system-ui
- Tallas: `--step-0`, `--step-1`, `--step-2` (ver `css/main.css`).
- `clamp()` para que la tipografía crezca con la pantalla

## Espaciado
- Escala: `--space-1`, `--space-2`, `--space-3`,`--space-4` (3rem).

## Componentes mínimos
- Botón `.btn` — estados `:hover`/`:focus-visible`.
- Tarjeta `.card` — dentro de `.grid-auto`.
- Navegación `.site-nav` — distribución con Flex.

## Accesibilidad
Foco visible, contraste AA, navegación por teclado, labels/aria-*.

## Componentes principales
- Navegación: `.site-nav`

- Layout: `.layout`
  - Propiedades:
    `display: flex`; `justify-content: space-between`; `align-items: center`
  - Logo a la izquierda, enlaces a la derecha.
  - `gap` entre enlaces: `var(--space-2)`
  - Sin lista de puntos: `list-style: none`
  - Enlaces con color de acento: `var(--accent)`

- Tarjeta: `.card`
  - Propiedades:
    `flex-column` interno:
    `display: flex`;
    `flex-direction: column`;
    `gap: var(--space-1)`;
    `padding`: `var(--space-2)`
  - Fondo: Claro `#f9fafb` / Oscuro `#111827`
  - Borde:
    Claro `1px solid #e5e7eb` / Oscuro `#1f2937`
    `var(--radius)`

- Títulos: `h3` y párrafos `p` con colores adaptados al modo claro/oscuro.
  
- Botón: `.btn`
  - Propiedades:
    `display`: `inline-flex`, centrado;
    `padding`: `6rem` `1.2rem`
  - Fondo: `var(--accent)`
  - Color: `#ffffff`
  - Borde: `var(--radius)`
  - `text-decoration: none`
  - Estados:
    `:hover` → `opacity: 0.9`;
    `:focus-visible` → `outline: 2px solid var(--accent)`, `outline-offset: 2px`

## Estados de foco
- `outline: 2px solid var(--accent)`;
- `outline-offset: 2px`

Permite navegación por teclado y mejora accesibilidad, cumpliendo con criterios AA de contraste y usabilidad.
