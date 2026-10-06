// A Open-Meteo informa o tempo com um código numérico (padrão WMO).
// Esta função traduz o código em um ícone e uma descrição em português.
export function descreverTempo(codigo) {
  if (codigo === 0) return { icone: '☀️', texto: 'Céu limpo' };
  if (codigo <= 2) return { icone: '🌤️', texto: 'Parcialmente nublado' };
  if (codigo === 3) return { icone: '☁️', texto: 'Nublado' };
  if (codigo <= 48) return { icone: '🌫️', texto: 'Neblina' };
  if (codigo <= 57) return { icone: '🌦️', texto: 'Garoa' };
  if (codigo <= 67) return { icone: '🌧️', texto: 'Chuva' };
  if (codigo <= 77) return { icone: '❄️', texto: 'Neve' };
  if (codigo <= 82) return { icone: '🌧️', texto: 'Pancadas de chuva' };
  if (codigo <= 86) return { icone: '🌨️', texto: 'Pancadas de neve' };
  return { icone: '⛈️', texto: 'Tempestade' };
}
