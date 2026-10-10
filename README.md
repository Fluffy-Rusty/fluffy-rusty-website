# Fluffy Rusty — website

Sitio estático en HTML, CSS y JavaScript. No requiere React, Node ni comando de compilación.

## Archivos
- `index.html` — contenido, marca y datos del proyecto.
- `style.css` — diseño adaptable a móvil y escritorio.
- `script.js` — menú móvil y botones de copia.
- `assets/` — las cuatro ilustraciones optimizadas en WebP.

## Publicar en Vercel
1. Sube todos los archivos y la carpeta `assets` a un repositorio de GitHub.
2. En Vercel, importa ese repositorio.
3. Framework Preset: **Other**.
4. Build Command: vacío.
5. Output Directory: `.` (o vacío si Vercel lo acepta).
6. Pulsa Deploy.

## Antes de anunciar el sitio
- Sustituye `ADD_YOUR_MINT_ADDRESS` en `index.html` por la dirección real del token.
- Actualiza el ticker `$FLUFFY` si el ticker oficial será distinto.
- Sustituye los enlaces `href="#"` de X, Telegram y DexScreener por las URL oficiales.
- El precio, market cap y datos de mercado no se muestran todavía; evita publicar datos no verificados.
- Comprueba todos los enlaces en móvil y escritorio.

La web usa **Fluffy Rusty** como nombre del proyecto y mantiene `$FLUFFY` como ticker provisional. El nombre del proyecto y el ticker no tienen que ser iguales.
