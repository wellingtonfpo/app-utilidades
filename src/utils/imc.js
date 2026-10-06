// Funções "puras": recebem valores e devolvem um resultado,
// sem depender de tela, estado ou internet. São fáceis de testar.

export function calcularImc(peso, altura) {
  return peso / (altura * altura);
}

// Classificação segundo a Organização Mundial da Saúde (OMS)
export function classificarImc(imc) {
  if (imc < 18.5) return { texto: 'Abaixo do peso', cor: '#2F80ED' };
  if (imc < 25) return { texto: 'Peso normal', cor: '#2E9E6B' };
  if (imc < 30) return { texto: 'Sobrepeso', cor: '#E0A100' };
  if (imc < 35) return { texto: 'Obesidade grau I', cor: '#F2711C' };
  if (imc < 40) return { texto: 'Obesidade grau II', cor: '#E84848' };
  return { texto: 'Obesidade grau III', cor: '#B42318' };
}
