# Nuca, peluquería y barbería: web de ejemplo

Web de una peluquería hecha con Astro 7, pensada como punto de partida para un cliente real. Servicios, cortes, equipo, opiniones y consejos son de ejemplo y salen de archivos que equivalen a documentos de un CMS, para pasarla a Sanity sin rehacer las páginas.

## Qué incluye (29 páginas)

- **Cita online paso a paso** (`/cita/`): servicios (varios a la vez, con precio y duración al momento), profesional (solo los que hacen lo elegido), día (21 días, lunes y domingos cerrados) y hora (huecos de 30 minutos calculados según la duración total), datos con consentimiento y confirmación. Acepta `?servicio=degradado` para llegar con el servicio elegido.
- **Catálogo de 10 cortes** con ilustraciones originales en SVG, filtros por largo, tipo de cabello y retoque, y ficha de cada corte (qué es, cómo pedirlo, cómo peinarlo en casa).
- **¿Qué corte me va?**: cuestionario que puntúa los cortes según largo, cabello, rostro y tiempo de mantenimiento.
- **Servicios y precios** (cortes, barbería, color, tratamientos, peinados), **Equipo**, **Bono regalo**, **Contacto**, **Consejos** (4 artículos) y preguntas frecuentes con datos estructurados.
- Aviso legal, condiciones de reserva (cancelación 24 h), privacidad, cookies, créditos de fotos, 404, sitemap y `robots.txt`.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Dónde está cada cosa

| Qué | Dónde |
|---|---|
| Cortes | `src/content/cortes/*.json` |
| Servicios, equipo, opiniones, preguntas | `src/content/datos/*.json` |
| Consejos | `src/content/blog/*.md` |
| Datos del salón, horario y reglas de cita | `src/lib/sitio.ts` |
| Esquemas del contenido | `src/content.config.ts` |
| Acceso al contenido (aquí entra el CMS) | `src/lib/contenido.ts` |
| Ilustraciones de cortes | `src/components/Ilustracion.astro` |
| Fotos | `src/assets/fotos/` · créditos en `src/lib/creditos.json` |

## Pasar el contenido a Sanity

Las páginas solo llaman a `src/lib/contenido.ts`. Crear los tipos `servicio`, `corte`, `profesional`, `opinion`, `pregunta`, `entrada` y un documento único `ajustes`, con los campos de `src/content.config.ts`, y reescribir `contenido.ts` con consultas GROQ.

## Para que las citas sean reales

En la demo los huecos ocupados son simulados (función `ocupado` en `src/pages/cita.astro`) y el formulario no envía nada salvo que se defina `PUBLIC_FORM_ENDPOINT`. Con un cliente real hay que conectar el calendario (Google Calendar, Cal.com o un servicio propio) para leer los huecos libres y guardar la reserva.

## Privacidad

No pide datos de salud, no pone cookies, no guarda nada en el navegador y no contacta con dominios externos. Los textos legales son plantillas que debe revisar el asesor del cliente.
