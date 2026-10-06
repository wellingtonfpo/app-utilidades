import { useState } from 'react';
import { View, Text, Keyboard, StyleSheet } from 'react-native';
import Tela from '../components/Tela';
import Campo from '../components/Campo';
import Botao from '../components/Botao';
import CardResultado from '../components/CardResultado';
import LinhaInfo from '../components/LinhaInfo';
import MensagemErro from '../components/MensagemErro';
import { buscarPrevisaoTempo } from '../services/api';
import { descreverTempo } from '../utils/clima';
import { formatarDia } from '../utils/formatar';
import cores from '../styles/cores';

export default function ClimaScreen() {
  const [cidade, setCidade] = useState('');
  const [previsao, setPrevisao] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  // Função assíncrona: espera (await) a resposta da API
  async function consultar() {
    Keyboard.dismiss();

    if (cidade.trim() === '') {
      setErro('Digite o nome de uma cidade.');
      return;
    }

    setCarregando(true);
    setErro('');
    setPrevisao(null);

    try {
      const dados = await buscarPrevisaoTempo(cidade.trim());
      setPrevisao(dados);
    } catch (e) {
      setErro(e.message || 'Erro ao consultar a previsão.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <Tela>
      <Campo
        label="Cidade"
        placeholder="Ex.: Fortaleza"
        value={cidade}
        onChangeText={setCidade}
        onSubmitEditing={consultar}
        returnKeyType="search"
      />
      <Botao titulo="Consultar" cor={cores.clima} onPress={consultar} carregando={carregando} />

      <MensagemErro mensagem={erro} />

      {previsao && (
        <>
          <CardResultado titulo={`${previsao.cidade} - ${previsao.estado ?? previsao.pais}`} cor={cores.clima}>
            <View style={styles.atual}>
              <Text style={styles.icone}>{descreverTempo(previsao.atual.weather_code).icone}</Text>
              <View>
                <Text style={styles.temperatura}>{Math.round(previsao.atual.temperature_2m)}°C</Text>
                <Text style={styles.descricao}>{descreverTempo(previsao.atual.weather_code).texto}</Text>
              </View>
            </View>

            <LinhaInfo label="Sensação térmica" valor={`${Math.round(previsao.atual.apparent_temperature)}°C`} />
            <LinhaInfo label="Umidade" valor={`${previsao.atual.relative_humidity_2m}%`} />
            <LinhaInfo label="Vento" valor={`${Math.round(previsao.atual.wind_speed_10m)} km/h`} />
          </CardResultado>

          <CardResultado titulo="Próximos dias" cor={cores.clima}>
            {/* Percorre a lista de datas e cria uma linha para cada dia */}
            {previsao.diaria.time.map((dia, indice) => (
              <View key={dia} style={styles.dia}>
                <Text style={styles.diaNome}>{formatarDia(dia)}</Text>
                <Text style={styles.diaIcone}>{descreverTempo(previsao.diaria.weather_code[indice]).icone}</Text>
                <Text style={styles.diaChuva}>💧 {previsao.diaria.precipitation_probability_max[indice] ?? 0}%</Text>
                <Text style={styles.diaTemp}>
                  {Math.round(previsao.diaria.temperature_2m_min[indice])}° / {Math.round(previsao.diaria.temperature_2m_max[indice])}°
                </Text>
              </View>
            ))}
          </CardResultado>
        </>
      )}
    </Tela>
  );
}

const styles = StyleSheet.create({
  atual: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icone: {
    fontSize: 56,
    marginRight: 16,
  },
  temperatura: {
    fontSize: 40,
    fontWeight: 'bold',
    color: cores.texto,
  },
  descricao: {
    fontSize: 16,
    color: cores.textoSecundario,
  },
  dia: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: cores.fundo,
  },
  diaNome: {
    width: 90,
    fontSize: 15,
    color: cores.texto,
  },
  diaIcone: {
    fontSize: 22,
  },
  diaChuva: {
    width: 60,
    fontSize: 14,
    color: cores.clima,
    textAlign: 'center',
  },
  diaTemp: {
    width: 80,
    fontSize: 15,
    fontWeight: 'bold',
    color: cores.texto,
    textAlign: 'right',
  },
});
