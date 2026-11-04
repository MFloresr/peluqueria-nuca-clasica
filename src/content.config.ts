// Esquemas del contenido. Cada colección equivale a un tipo de documento del futuro CMS (Sanity):
// cortes, servicios, equipo, opiniones, preguntas y entradas del blog.
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

export const CATEGORIAS = ['corte', 'barberia', 'color', 'tratamientos', 'peinado'] as const;
export const LARGOS = ['corto', 'medio', 'largo'] as const;
export const CABELLOS = ['liso', 'ondulado', 'rizado', 'fino', 'grueso'] as const;
export const ROSTROS = ['ovalado', 'redondo', 'cuadrado', 'alargado', 'corazon'] as const;

const servicios = defineCollection({
  loader: file('src/content/datos/servicios.json'),
  schema: z.object({
    nombre: z.string(),
    categoria: z.enum(CATEGORIAS),
    duracion: z.number(), // minutos
    precio: z.number(),
    desde: z.boolean().default(false), // el precio depende de la longitud o el trabajo
    descripcion: z.string(),
    orden: z.number(),
  }),
});

const cortes = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/cortes' }),
  schema: z.object({
    nombre: z.string(),
    resumen: z.string(),
    largo: z.enum(LARGOS),
    cabello: z.array(z.enum(CABELLOS)), // tipos de cabello con los que funciona bien
    rostros: z.array(z.enum(ROSTROS)), // formas de rostro a las que suele favorecer (orientativo)
    mantenimiento: z.number(), // semanas entre visitas
    duracion: z.number(),
    desde: z.number(),
    servicio: z.string(), // id del servicio que se reserva
    ilustracion: z.string(),
    queEs: z.string(),
    comoPedirlo: z.array(z.string()),
    enCasa: z.array(z.string()),
    orden: z.number(),
  }),
});

const equipo = defineCollection({
  loader: file('src/content/datos/equipo.json'),
  schema: z.object({ nombre: z.string(), cargo: z.string(), especialidad: z.string(), texto: z.string(), categorias: z.array(z.enum(CATEGORIAS)) }),
});

const opiniones = defineCollection({
  loader: file('src/content/datos/opiniones.json'),
  schema: z.object({ nombre: z.string(), servicio: z.string(), texto: z.string() }),
});

const preguntas = defineCollection({
  loader: file('src/content/datos/preguntas.json'),
  schema: z.object({ tema: z.enum(['citas', 'cortes', 'color', 'bono']), pregunta: z.string(), respuesta: z.string() }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({ titulo: z.string(), resumen: z.string(), fecha: z.coerce.date(), categoria: z.string(), foto: image(), fotoAlt: z.string(), minutos: z.number() }),
});

export const collections = { servicios, cortes, equipo, opiniones, preguntas, blog };
