# Mobile Responsiveness Check & Fix

Audita y corrige los problemas de responsive para móvil en este proyecto. Sigue estos pasos en orden:

## 1. Leer los archivos CSS y HTML actuales

Lee todos los archivos relevantes antes de tocar nada:
- `src/css/main.css` — estilos principales
- `index.html` — estructura HTML y meta tags

## 2. Auditoría — detectar problemas

Comprueba estos puntos concretos:

**HTML:**
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1.0">` presente en `<head>`
- [ ] No hay `font-size` menor de 16px en inputs (causa zoom automático en iOS)

**CSS — layout:**
- [ ] No hay `width` fijo en píxeles en elementos de contenedor (usar `max-width` + `width: 100%`)
- [ ] No hay `min-width` que cause overflow horizontal
- [ ] Los grids usan `auto-fill` o `auto-fit` con `minmax`, no columnas fijas
- [ ] Hay al menos un breakpoint `@media` para móvil (`≤480px` o `≤600px`)

**CSS — texto:**
- [ ] Los títulos usan `clamp()` o unidades relativas, no `px` fijo grande
- [ ] El `font-size` base del body es legible en móvil (≥16px o equivalente en rem)

**CSS — interacción táctil:**
- [ ] Los elementos clicables (cards, botones, links) tienen área táctil mínima de 44×44px efectivos
- [ ] No hay efectos `:hover` sin alternativa táctil (en móvil el hover no siempre funciona)

**CSS — overflow y scroll:**
- [ ] No hay `overflow: hidden` en el body/html que tape contenido en pantallas pequeñas
- [ ] Las imágenes y SVGs tienen `max-width: 100%` o están contenidos en su padre

## 3. Aplicar fixes

Por cada problema detectado:
1. Anota qué línea y fichero tiene el problema
2. Aplica el fix mínimo necesario — no refactorices lo que funciona
3. Explica en una línea qué corregiste y por qué

## 4. Verificación final

Tras aplicar los fixes, vuelve a leer las secciones modificadas y confirma que:
- Los breakpoints existentes (`≤768px`, `≤480px`) siguen siendo coherentes entre sí
- No se ha roto ningún estilo de escritorio al arreglar el móvil
- Las cards del grid se ven bien en 320px, 375px y 414px de ancho (iphones comunes)

## 5. Resumen

Termina con una lista de:
- **Problemas encontrados** (si los hay)
- **Fixes aplicados**
- **Nada que cambiar** si todo estaba correcto
