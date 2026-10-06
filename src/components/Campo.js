import { View, Text, TextInput, StyleSheet } from 'react-native';
import cores from '../styles/cores';

// Campo de texto com rótulo (label).
// Recebe "label" e repassa as demais props (value, onChangeText,
// placeholder, keyboardType...) direto para o TextInput.
export default function Campo({ label, ...props }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={cores.textoSecundario}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: cores.texto,
    marginBottom: 6,
  },
  input: {
    height: 48,
    backgroundColor: cores.branco,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: cores.texto,
  },
});
