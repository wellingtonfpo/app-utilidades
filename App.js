import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/screens/HomeScreen';
import ImcScreen from './src/screens/ImcScreen';
import ClimaScreen from './src/screens/ClimaScreen';
import DolarScreen from './src/screens/DolarScreen';
import CepScreen from './src/screens/CepScreen';
import cores from './src/styles/cores';

// Cria o navegador do tipo Stack (pilha):
// cada tela aberta é "empilhada" sobre a anterior,
// e o botão voltar remove a tela do topo da pilha.
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: cores.primaria },
          headerTintColor: cores.branco,
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'App Utilidades' }} />
        <Stack.Screen name="Imc" component={ImcScreen} options={{ title: 'Calculadora de IMC' }} />
        <Stack.Screen name="Clima" component={ClimaScreen} options={{ title: 'Previsão do Tempo' }} />
        <Stack.Screen name="Dolar" component={DolarScreen} options={{ title: 'Cotação do Dólar' }} />
        <Stack.Screen name="Cep" component={CepScreen} options={{ title: 'Consulta de CEP' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
