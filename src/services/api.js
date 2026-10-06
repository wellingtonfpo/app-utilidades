// Funções que acessam as APIs públicas (todas gratuitas e sem chave).
// Cada função usa fetch + async/await e devolve apenas os dados úteis.

// ViaCEP: https://viacep.com.br
export async function buscarCep(cep) {
  const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

  if (!resposta.ok) {
    throw new Error('Não foi possível consultar o CEP.');
  }

  const dados = await resposta.json();

  // Quando o CEP não existe, a ViaCEP responde { "erro": true }
  if (dados.erro) {
    throw new Error('CEP não encontrado.');
  }

  return dados;
}

// AwesomeAPI: https://docs.awesomeapi.com.br
export async function buscarCotacaoDolar() {
  const resposta = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');

  if (!resposta.ok) {
    throw new Error('Não foi possível consultar a cotação.');
  }

  const dados = await resposta.json();
  return dados.USDBRL;
}

// Open-Meteo: https://open-meteo.com
// 1º passo: descobrir a latitude/longitude da cidade (geocodificação)
// 2º passo: buscar a previsão do tempo para essas coordenadas
export async function buscarPrevisaoTempo(nomeCidade) {
  const urlCidade =
    'https://geocoding-api.open-meteo.com/v1/search' +
    `?name=${encodeURIComponent(nomeCidade)}&count=1&language=pt&format=json`;

  const respostaCidade = await fetch(urlCidade);
  const dadosCidade = await respostaCidade.json();

  if (!dadosCidade.results || dadosCidade.results.length === 0) {
    throw new Error('Cidade não encontrada.');
  }

  const cidade = dadosCidade.results[0];

  const urlPrevisao =
    'https://api.open-meteo.com/v1/forecast' +
    `?latitude=${cidade.latitude}&longitude=${cidade.longitude}` +
    '&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m' +
    '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max' +
    '&timezone=auto&forecast_days=5';

  const respostaPrevisao = await fetch(urlPrevisao);

  if (!respostaPrevisao.ok) {
    throw new Error('Não foi possível consultar a previsão.');
  }

  const previsao = await respostaPrevisao.json();

  return {
    cidade: cidade.name,
    estado: cidade.admin1,
    pais: cidade.country,
    atual: previsao.current,
    diaria: previsao.daily,
  };
}
