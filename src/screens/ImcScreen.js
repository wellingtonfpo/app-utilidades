import { useState } from 'react';
import { Text, Keyboard, StyleSheet } from 'react-native';
import Tela from '../components/Tela';
import Campo from '../components/Campo';
import Botao from '../components/Botao';
import CardResultado from '../components/CardResultado';
import MensagemErro from '../components/MensagemErro';
import { calcularImc, classificarImc } from '../utils/imc';
import { textoParaNumero, formatarNumero } from '../utils/formatar';
import cores from '../styles/cores';

export default function ImcScreen() {
  // Estados (useState): quando mudam, a tela é desenhada novamente
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState('');

  function calcular() {
    Keyboard.dismiss();

    const pesoNumero = textoParaNumero(peso);
    let alturaNumero = textoParaNumero(altura);

    if (!pesoNumero || !alturaNumero || pesoNumero <= 0 || alturaNumero <= 0) {
      setErro('Informe um peso e uma altura válidos.');
      setResultado(null);
      return;
    }

    // Se a pessoa digitou a altura em centímetros (ex.: 175), converte para metros
    if (alturaNumero > 3) {
      alturaNumero = alturaNumero / 100;
    }

    const imc = calcularImc(pesoNumero, alturaNumero);
    setResultado({ imc, classificacao: classificarImc(imc) });
    setErro('');
  }

  function limpar() {
    setPeso('');
    setAltura('');
    setResultado(null);
    setErro('');
  }

  return (
    <Tela>
      <Campo
        label="Peso (kg)"
        placeholder="Ex.: 70,5"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <Campo
        label="Altura (m)"
        placeholder="Ex.: 1,75"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <Botao titulo="Calcular" cor={cores.imc} onPress={calcular} />
      <Botao titulo="Limpar" cor={cores.textoSecundario} onPress={limpar} />

      <MensagemErro mensagem={erro} />

      {/* Renderização condicional: o card só aparece quando há resultado */}
      {resultado && (
        <CardResultado titulo="Seu IMC" cor={resultado.classificacao.cor}>
          <Text style={styles.valor}>{formatarNumero(resultado.imc)}</Text>
          <Text style={[styles.classificacao, { color: resultado.classificacao.cor }]}>
            {resultado.classificacao.texto}
          </Text>
        </CardResultado>
      )}

      <CardResultado titulo="Tabela de referência (OMS)">
        <Text style={styles.tabela}>Menor que 18,5 — Abaixo do peso</Text>
        <Text style={styles.tabela}>18,5 a 24,9 — Peso normal</Text>
        <Text style={styles.tabela}>25 a 29,9 — Sobrepeso</Text>
        <Text style={styles.tabela}>30 a 34,9 — Obesidade grau I</Text>
        <Text style={styles.tabela}>35 a 39,9 — Obesidade grau II</Text>
        <Text style={styles.tabela}>40 ou mais — Obesidade grau III</Text>
      </CardResultado>
    </Tela>
  );
}

const styles = StyleSheet.create({
  valor: {
    fontSize: 48,
    fontWeight: 'bold',
    color: cores.texto,
    textAlign: 'center',
  },
  classificacao: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 4,
  },
  tabela: {
    fontSize: 14,
    color: cores.textoSecundario,
    marginBottom: 4,
  },
});
