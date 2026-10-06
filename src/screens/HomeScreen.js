import { View, Text, StyleSheet } from 'react-native';
import BotaoMenu from '../components/BotaoMenu';
import Tela from '../components/Tela';
import cores from '../styles/cores';

// Lista com os dados de cada botão do menu.
// "tela" é o nome usado em <Stack.Screen name="..."> no App.js.
const itensMenu = [
  { titulo: 'Calcular IMC', tela: 'Imc', imagem: require('../../assets/images/imc.png'), cor: cores.imc },
  { titulo: 'Previsão do Tempo', tela: 'Clima', imagem: require('../../assets/images/clima.png'), cor: cores.clima },
  { titulo: 'Cotação do Dólar', tela: 'Dolar', imagem: require('../../assets/images/dolar.png'), cor: cores.dolar },
  { titulo: 'Consultar CEP', tela: 'Cep', imagem: require('../../assets/images/cep.png'), cor: cores.cep },
];

// Toda tela registrada no Stack recebe a prop "navigation".
export default function HomeScreen({ navigation }) {
  return (
    <Tela>
      <Text style={styles.titulo}>Olá! 👋</Text>
      <Text style={styles.subtitulo}>Escolha uma das funcionalidades abaixo:</Text>

      <View style={styles.grade}>
        {itensMenu.map((item) => (
          <BotaoMenu
            key={item.tela}
            titulo={item.titulo}
            imagem={item.imagem}
            cor={item.cor}
            onPress={() => navigation.navigate(item.tela)}
          />
        ))}
      </View>
    </Tela>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: cores.texto,
  },
  subtitulo: {
    fontSize: 16,
    color: cores.textoSecundario,
    marginTop: 4,
    marginBottom: 24,
  },
  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
