// Datos de la peluquería. En producción vendrían del CMS (un documento "Ajustes del sitio").
// Todo lo marcado como ejemplo o entre corchetes lo sustituye el cliente con sus datos reales.

export type Horario = { etiqueta: string; tramos: { abre: string; cierra: string }[] };

export const sitio = {
  nombre: 'Nuca',
  eslogan: 'Peluquería y barbería',
  descripcion:
    'Peluquería y barbería con cita online: cortes, color, tratamientos y peinados. Elige tu corte, tu profesional y tu hora, y te esperamos.',
  url: 'https://www.nucapeluqueria.example',
  // Datos de ejemplo
  telefono: '+34936000000',
  telefonoVisible: '936 00 00 00',
  whatsapp: '34600000000',
  email: 'hola@nucapeluqueria.example',
  direccion: { calle: 'Carrer de Mostra, 9', cp: '08023', ciudad: 'Barcelona', provincia: 'Barcelona' },
  mapa: 'https://www.openstreetmap.org/search?query=Barcelona',
  endpointFormularios: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
  cita: {
    paso: 30, // minutos entre horas de inicio
    diasVista: 21, // cuántos días se pueden reservar por adelantado
    cancelacionHoras: 24,
  },
  horarios: [
    { etiqueta: 'Martes a viernes', tramos: [{ abre: '10:00', cierra: '20:00' }] },
    { etiqueta: 'Sábados', tramos: [{ abre: '09:30', cierra: '15:00' }] },
    { etiqueta: 'Domingos y lunes', tramos: [] },
  ] as Horario[],
  // Horario por día de la semana (0 = domingo): [apertura, cierre]
  semana: {
    0: [],
    1: [],
    2: [['10:00', '20:00']],
    3: [['10:00', '20:00']],
    4: [['10:00', '20:00']],
    5: [['10:00', '20:00']],
    6: [['09:30', '15:00']],
  } as Record<number, string[][]>,
  responsableLegal: {
    razonSocial: '[Razón social del cliente]',
    nif: '[NIF]',
    registro: '[Datos del Registro Mercantil]',
    domicilio: 'Carrer de Mostra, 9, 08023 Barcelona',
  },
};

export const menu = [
  { href: '/cita/', texto: 'Pedir cita' },
  { href: '/cortes/', texto: 'Cortes' },
  { href: '/que-corte-me-va/', texto: '¿Qué corte me va?' },
  { href: '/servicios/', texto: 'Servicios' },
  { href: '/equipo/', texto: 'Equipo' },
  { href: '/bono-regalo/', texto: 'Bono regalo' },
  { href: '/consejos/', texto: 'Consejos' },
];
