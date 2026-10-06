import { ScrollView, StyleSheet } from 'react-native';
import cores from '../styles/cores';

// Estrutura base de todas as telas: fundo cinza, espaçamento
// e rolagem (útil quando o teclado aparece em telas pequenas).
export default function Tela({ children }) {
  return (
    <ScrollView
      style={styles.tela}
      contentContainerStyle={styles.conteudo}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  conteudo: {
    padding: 20,
  },
});
