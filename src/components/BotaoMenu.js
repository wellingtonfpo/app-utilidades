import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import cores from '../styles/cores';

// Botão com imagem usado na tela inicial.
// Props:
//   titulo  -> texto exibido abaixo da imagem
//   imagem  -> imagem carregada com require(...)
//   cor     -> cor da borda inferior do botão
//   onPress -> função executada ao tocar no botão
export default function BotaoMenu({ titulo, imagem, cor, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.botao, { borderBottomColor: cor }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image source={imagem} style={styles.imagem} />
      <Text style={styles.titulo}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    width: '47%',
    backgroundColor: cores.branco,
    borderRadius: 12,
    borderBottomWidth: 5,
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  imagem: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.texto,
    textAlign: 'center',
  },
});
