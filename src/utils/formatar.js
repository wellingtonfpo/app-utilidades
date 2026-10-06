// Converte texto digitado pelo usuário em número.
// Aceita vírgula ou ponto: "1,75" ou "1.75" -> 1.75
export function textoParaNumero(texto) {
  return parseFloat(String(texto).replace(',', '.'));
}

// 5.4321 -> "R$ 5,43"
export function formatarReal(valor) {
  return 'R$ ' + Number(valor).toFixed(2).replace('.', ',');
}

// 5.4321 -> "5,43"
export function formatarNumero(valor, casas = 2) {
  return Number(valor).toFixed(casas).replace('.', ',');
}

// "2026-10-06" -> "Ter, 06/10"
export function formatarDia(dataTexto) {
  const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const [ano, mes, dia] = dataTexto.split('-');
  const data = new Date(Number(ano), Number(mes) - 1, Number(dia));
  return `${diasSemana[data.getDay()]}, ${dia}/${mes}`;
}

// "2026-10-06 15:30:00" -> "06/10/2026 às 15:30"
export function formatarDataHora(dataHoraTexto) {
  const [data, hora] = dataHoraTexto.split(' ');
  const [ano, mes, dia] = data.split('-');
  return `${dia}/${mes}/${ano} às ${hora.slice(0, 5)}`;
}
