# Migración v2 — Multi-página + Navbar horizontal
## Guía de aplicación de cambios

---

## Nueva estructura de rutas (App Router)

```
src/
├── app/
│   ├── layout.tsx              ← Layout raíz (Navbar + Footer globales)
│   ├── globals.css             ← Tokens + clases utilitarias
│   ├── page.tsx                ← / → Inicio (Hero + resumen)
│   ├── proyectos/
│   │   └── page.tsx            ← /proyectos
│   ├── sobre-mi/
│   │   └── page.tsx            ← /sobre-mi
│   └── contacto/
│       └── page.tsx            ← /contacto
├── components/
│   ├── Navbar.tsx              ← Navbar superior horizontal
│   ├── Footer.tsx              ← Footer global
│   └── ProjectRow.tsx          ← Fila de proyecto con botones grandes
└── sections/                   ← (ya no se usan — lógica migrada a pages)
```

**Eliminar** los archivos de `src/sections/` y `src/components/Badge.tsx`
y `src/components/ProjectCard.tsx`.

---

## Cambios por ítem solicitado

### Cambio 1 — Multi-página

Cada sección anterior del landing ahora es una ruta independiente.
El `layout.tsx` raíz envuelve todo con `<Navbar>` y `<Footer>`,
así ambos aparecen en todas las páginas sin repetir código.

El metadata (`<title>`) se declara por página con `export const metadata`.
El template `"%s — Benjamín Rivera"` en el layout lo concatena automáticamente.

```tsx
// Ejemplo en cualquier page.tsx
export const metadata: Metadata = {
  title: "Proyectos",   // → "Proyectos — Benjamín Rivera"
};
```

---

### Cambio 2 — Navbar horizontal

**Eliminado:** `.side-nav`, `.side-corner-right`, `.side-nav-link`,
`.side-nav-logo`, `.mobile-nav` (con texto vertical y bottom-nav).

**Nuevo:** `.top-nav` fijo en la parte superior.

| Elemento | Clase / descripción |
|----------|---------------------|
| Header wrapper | `.top-nav` — `position: fixed; height: var(--nav-h)` |
| Contenido interno | `.top-nav-inner` — flex, max-width 1100px |
| Logo | `.top-nav-logo` — peso 900, horizontal |
| Links desktop | `.top-nav-links` — flex row, gap 2.5rem |
| Link individual | `.top-nav-link` — `.active` se aplica vía `usePathname()` |
| Botón CTA | `.top-nav-cta` — fondo negro, texto crema, sin border-radius |
| Mobile | `.nav-hamburger` + `.nav-mobile-panel` — panel que se despliega desde el nav |

El componente usa `"use client"` solo para `usePathname` y el state del hamburger.
El resto del sitio permanece Server Components.

---

### Cambio 3 — Contactos flotantes eliminados

La barra derecha (`.side-corner-right`) con GitHub / Email / CV en
vertical fue eliminada completamente.

Ahora esos links aparecen en **dos lugares limpios**:

- **Footer global** (`src/components/Footer.tsx`) — en todas las páginas,
  horizontalmente, a la derecha del copyright.
- **Página `/contacto`** — como lista tipográfica de ancho completo
  (`.contact-link` con hover deslizante).

---

### Cambio 4 — Enumeraciones eliminadas

Antes: `[001] — Sobre mí`, `[002] — Stack técnico`, etc.

Ahora: solo el label en monoespaciado sin número.
```tsx
// Antes
<span className="t-section-label">[002] — Stack técnico</span>

// Ahora
<span className="t-section-label">Stack técnico</span>
```

La única excepción válida sería una lista de pasos ordenados
(proceso de instalación, etapas de un proyecto, etc.).

---

### Cambio 5 — Botones de proyectos

**Antes** (`ProjectCard.tsx`):
```tsx
// Icono SVG 20×20 en esquina superior derecha del card
// Sin label de texto, hitbox tiny
<a href={githubUrl}>
  <svg width="20" height="20">...</svg>
</a>
```

**Ahora** (`ProjectRow.tsx`):
```tsx
// Botón con label completo + ícono tipográfico + min-height 2.75rem
<a href={liveUrl} className="project-btn-solid" aria-label="Ver X en vivo">
  <span aria-hidden="true">↗</span>
  Página en vivo
</a>

<a href={githubUrl} className="project-btn-ghost" aria-label="Ver código de X en GitHub">
  <span aria-hidden="true">⌥</span>
  GitHub
</a>
```

Clases clave:
- `.project-btn-solid` — fondo negro, padding `0.7rem 1.4rem`, min-height `2.75rem`
- `.project-btn-ghost` — borde negro, mismo padding/altura
- En hover del row, los colores se invierten automáticamente para mantener el contraste

---

## Cómo agregar una imagen de preview a un proyecto

```tsx
// En src/app/proyectos/page.tsx
{
  title: "Copa Cevi",
  imageUrl: "/images/copa-cevi-preview.jpg",  // ← agregar
  // ...
}
```

Colocar la imagen en `public/images/`. El componente `ProjectRow` ya tiene
el `<img>` preparado. La imagen aparece en el reveal al hover (solo desktop).

---

## Variables CSS de referencia

```css
--ink:     #0a0a0a   /* negro principal */
--paper:   #f5f4f0   /* crema de fondo */
--ash:     #1c1c1c   /* casi negro */
--dust:    #2e2e2e   /* carbón */
--smoke:   #5a5a5a   /* gris textos secundarios */
--rule:    1px solid #0a0a0a
--rule-sm: 0.5px solid rgba(10,10,10,0.25)
--nav-h:   4rem      /* altura navbar — usada en page-wrapper padding-top */
```
