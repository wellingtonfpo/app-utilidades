import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ImcScreen from '../screens/ImcScreen';
import ClimaScreen from '../screens/ClimaScreen';
import DolarScreen from '../screens/DolarScreen';
import CepScreen from '../screens/CepScreen';
import cores from '../styles/cores';

// Cria o navegador do tipo Stack (pilha):
// cada tela aberta é "empilhada" sobre a anterior,
// e o botão voltar remove a tela do topo da pilha.
const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: cores.primaria },
        headerTintColor: cores.branco,
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'App Utilidades' }}
      />
      <Stack.Screen
        name='Imc'
        component={ImcScreen}
        options={{ title: 'Calculadora de IMC' }}
      />
      <Stack.Screen
        name='Clima'
        component={ClimaScreen}
        options={{ title: 'Previsão do Tempo' }}
      />
      <Stack.Screen
        name='Dolar'
        component={DolarScreen}
        options={{ title: 'Cotação do Dólar' }}
      />
      <Stack.Screen
        name='Cep'
        component={CepScreen}
        options={{ title: 'Consulta de CEP' }}
      />
    </Stack.Navigator>
  );
}
