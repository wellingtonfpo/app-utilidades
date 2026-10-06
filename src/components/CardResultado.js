import { View, Text, StyleSheet } from 'react-native';
import cores from '../styles/cores';

// Cartão branco usado para exibir resultados.
// O conteúdo do cartão é passado como "children",
// ou seja, tudo o que estiver entre <CardResultado> e </CardResultado>.
export default function CardResultado({ titulo, cor = cores.primaria, children }) {
  return (
    <View style={[styles.card, { borderLeftColor: cor }]}>
      {titulo ? <Text style={styles.titulo}>{titulo}</Text> : null}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: cores.branco,
    borderRadius: 8,
    borderLeftWidth: 5,
    padding: 16,
    marginTop: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: cores.texto,
    marginBottom: 10,
  },
});
