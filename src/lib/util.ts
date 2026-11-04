import type { CollectionEntry } from 'astro:content';

export type Servicio = CollectionEntry<'servicios'>;
export type Corte = CollectionEntry<'cortes'>;

export const NBSP = ' ';
const nf = new Intl.NumberFormat('es-ES', { useGrouping: 'always' });
export const euros = (n: number) => `${nf.format(n)}${NBSP}€`;
export const duracion = (min: number) => {
  const h = Math.floor(min / 60), m = min % 60;
  return h ? (m ? `${h}${NBSP}h ${m}${NBSP}min` : `${h}${NBSP}h`) : `${m}${NBSP}min`;
};

export const NOMBRE_CATEGORIA: Record<string, string> = { corte: 'Corte', barberia: 'Barbería', color: 'Color', tratamientos: 'Tratamientos', peinado: 'Peinados' };
export const NOMBRE_LARGO: Record<string, string> = { corto: 'Corto', medio: 'Medio', largo: 'Largo' };
export const NOMBRE_CABELLO: Record<string, string> = { liso: 'Liso', ondulado: 'Ondulado', rizado: 'Rizado', fino: 'Fino', grueso: 'Grueso' };
export const NOMBRE_ROSTRO: Record<string, string> = { ovalado: 'Ovalado', redondo: 'Redondo', cuadrado: 'Cuadrado', alargado: 'Alargado', corazon: 'Corazón' };

export const semanas = (n: number) => (n === 1 ? 'cada semana' : `cada ${n} semanas`);
