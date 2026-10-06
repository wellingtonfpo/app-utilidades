import { View, Text, StyleSheet } from 'react-native';
import cores from '../styles/cores';

// Exibe uma informação no formato "Rótulo ........ Valor".
export default function LinhaInfo({ label, valor }) {
  return (
    <View style={styles.linha}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: cores.fundo,
  },
  label: {
    fontSize: 15,
    color: cores.textoSecundario,
  },
  valor: {
    fontSize: 15,
    fontWeight: 'bold',
    color: cores.texto,
    flexShrink: 1,
    textAlign: 'right',
    marginLeft: 12,
  },
});
