import { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import Tela from '../components/Tela';
import Campo from '../components/Campo';
import Botao from '../components/Botao';
import CardResultado from '../components/CardResultado';
import LinhaInfo from '../components/LinhaInfo';
import MensagemErro from '../components/MensagemErro';
import { buscarCotacaoDolar } from '../services/api';
import { formatarReal, formatarNumero, formatarDataHora, textoParaNumero } from '../utils/formatar';
import cores from '../styles/cores';

export default function DolarScreen() {
  const [cotacao, setCotacao] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');
  const [valorDolar, setValorDolar] = useState('1');

  async function consultar() {
    setCarregando(true);
    setErro('');

    try {
      const dados = await buscarCotacaoDolar();
      setCotacao(dados);
    } catch (e) {
      setErro(e.message || 'Erro ao consultar a cotação.');
    } finally {
      setCarregando(false);
    }
  }

  // useEffect com [] vazio: executa UMA vez, quando a tela é aberta.
  // Assim a cotação já aparece sem o usuário precisar tocar em nada.
  useEffect(() => {
    consultar();
  }, []);

  // Valor convertido: calculado a cada nova renderização
  const valorEmReais = cotacao ? (textoParaNumero(valorDolar) || 0) * Number(cotacao.bid) : 0;
  const variacao = cotacao ? Number(cotacao.pctChange) : 0;

  return (
    <Tela>
      {cotacao && (
        <>
          <CardResultado titulo="Dólar Americano (USD)" cor={cores.dolar}>
            <Text style={styles.valor}>{formatarReal(cotacao.bid)}</Text>
            <Text style={[styles.variacao, { color: variacao >= 0 ? cores.imc : cores.erro }]}>
              {variacao >= 0 ? '▲' : '▼'} {formatarNumero(variacao)}% hoje
            </Text>

            <LinhaInfo label="Compra" valor={formatarReal(cotacao.bid)} />
            <LinhaInfo label="Venda" valor={formatarReal(cotacao.ask)} />
            <LinhaInfo label="Máxima do dia" valor={formatarReal(cotacao.high)} />
            <LinhaInfo label="Mínima do dia" valor={formatarReal(cotacao.low)} />
            <LinhaInfo label="Atualizado em" valor={formatarDataHora(cotacao.create_date)} />
          </CardResultado>

          <CardResultado titulo="Conversor" cor={cores.dolar}>
            <Campo
              label="Valor em dólares (US$)"
              keyboardType="numeric"
              value={valorDolar}
              onChangeText={setValorDolar}
            />
            <Text style={styles.convertido}>= {formatarReal(valorEmReais)}</Text>
          </CardResultado>
        </>
      )}

      <MensagemErro mensagem={erro} />

      <Botao titulo="Atualizar cotação" cor={cores.dolar} onPress={consultar} carregando={carregando} />
    </Tela>
  );
}

const styles = StyleSheet.create({
  valor: {
    fontSize: 40,
    fontWeight: 'bold',
    color: cores.texto,
    textAlign: 'center',
  },
  variacao: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  convertido: {
    fontSize: 26,
    fontWeight: 'bold',
    color: cores.texto,
    textAlign: 'center',
  },
});
