// Capa de acceso al contenido. Las páginas solo llaman a estas funciones.
// Hoy leen los archivos de src/content; para pasar al CMS (Sanity) basta con reescribir este archivo
// y devolver la misma forma de datos con consultas GROQ, sin tocar las páginas ni los componentes.
import { getCollection, getEntry } from 'astro:content';

export const getServicios = async () => (await getCollection('servicios')).sort((a, b) => a.data.orden - b.data.orden);
export const getCortes = async () => (await getCollection('cortes')).sort((a, b) => a.data.orden - b.data.orden);
export const getCorte = (id: string) => getEntry('cortes', id);
export const getEquipo = () => getCollection('equipo');
export const getOpiniones = () => getCollection('opiniones');
export const getEntradas = async () => (await getCollection('blog')).sort((a, b) => b.data.fecha.getTime() - a.data.fecha.getTime());
export const getPreguntas = async (tema?: string) => {
  const todas = await getCollection('preguntas');
  return tema ? todas.filter((p) => p.data.tema === tema) : todas;
};
