import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import cores from '../styles/cores';

// Botão de ação reutilizado em todas as telas.
// Props:
//   titulo     -> texto do botão
//   onPress    -> função executada ao tocar
//   cor        -> cor de fundo (opcional)
//   carregando -> se true, mostra um indicador de carregamento
export default function Botao({ titulo, onPress, cor = cores.primaria, carregando = false }) {
  return (
    <TouchableOpacity
      style={[styles.botao, { backgroundColor: cor }]}
      onPress={onPress}
      disabled={carregando}
    >
      {carregando ? (
        <ActivityIndicator color={cores.branco} />
      ) : (
        <Text style={styles.texto}>{titulo}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  texto: {
    color: cores.branco,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
