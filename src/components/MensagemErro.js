import { Text, StyleSheet } from 'react-native';
import cores from '../styles/cores';

// Mostra uma mensagem de erro. Se não houver mensagem, não mostra nada.
export default function MensagemErro({ mensagem }) {
  if (!mensagem) {
    return null;
  }

  return <Text style={styles.erro}>{mensagem}</Text>;
}

const styles = StyleSheet.create({
  erro: {
    color: cores.erro,
    fontSize: 15,
    marginTop: 16,
    textAlign: 'center',
  },
});
