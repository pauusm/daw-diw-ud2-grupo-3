# Guía de estilos — LocalHub (12 h)

## Paleta
- Brand: `#1e293b`  •  Acento: `#0ea5e9`  •  Texto: claro `#111111` / oscuro `#e6edf3`
-Fondo: claro `#ffffff`, oscuro `#0b1020`.

## Tipografía
- Base: system-ui; Tallas: `--step-0`, `--step-1`, `--step-2` (ver `css/main.css`).
- clamp() para que la tipografía crezca con la pantalla

## Espaciado
- Escala: `--space-1`, `--space-2`, `--space-3`,`--space-4`(3rem).

## Componentes mínimos
- Botón `.btn` — estados `:hover`/`:focus-visible`.
- Tarjeta `.card` — dentro de `.grid-auto`.
- Navegación `.site-nav` — distribución con Flex.

## Accesibilidad
- Foco visible, contraste AA, navegación por teclado, `alt`/labels.

## Componentes principales
- Navegación .site-nav
Layout: display: flex; justify-content: space-between; align-items: center.
Logo a la izquierda, enlaces a la derecha.
Gap entre enlaces: var(--space-2).
Sin lista de puntos (list-style: none).
Enlaces con color de acento: var(--accent).

- Tarjeta .card
Flex column interno (display: flex; flex-direction: column) con gap: var(--space-1).
Padding: var(--space-2).
Fondo: claro #f9fafb, borde 1px solid #e5e7eb.
Borde redondeado: var(--radius).
Títulos (h3) y párrafos (p) con colores adaptados al modo claro/oscuro.


-Botón .btn
Propiedades:
display: inline-flex, centrado.
Padding: .6rem 1.2rem.
Fondo: var(--accent).
Color: #fff.
Borde redondeado: var(--radius).
Text-decoration: none.

Estados:
:hover → opacidad 0.9.
:focus-visible → outline 2px var(--accent), offset 2px.



## Estados de foco
outline: 2px solid var(--accent);
outline-offset: 2px;

- Permite navegación por teclado y mejora accesibilidad, cumpliendo con criterios AA de contraste y usabilidad.