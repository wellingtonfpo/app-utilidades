import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

import HomeScreen from '../screens/HomeScreen';
import ImcScreen from '../screens/ImcScreen';
import ClimaScreen from '../screens/ClimaScreen';
import DolarScreen from '../screens/DolarScreen';
import CepScreen from '../screens/CepScreen';
import cores from '../styles/cores';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: cores.primaria },
        headerTintColor: cores.branco,
        headerTitleStyle: { fontWeight: 'bold' },
        animation: 'fade',
      }}
    >
      {/* <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'App Utilidades' }}
      /> */}
      <Tab.Screen
        name='Imc'
        component={ImcScreen}
        options={{
          tabBarLabel: 'IMC',
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: { fontWeight: 'bold', color: cores.imc },
          tabBarIcon: () => (
            <MaterialIcons name='calculate' size={24} color={cores.imc} />
          ),
        }}
      />
      <Tab.Screen
        name='Clima'
        component={ClimaScreen}
        options={{
          tabBarLabel: 'Tempo',
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: { fontWeight: 'bold', color: cores.clima },
          tabBarIcon: () => (
            <MaterialIcons name='cloud' size={24} color={cores.clima} />
          ),
        }}
      />
      <Tab.Screen
        name='Dolar'
        component={DolarScreen}
        options={{
          tabBarLabel: 'Dolar',
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: { fontWeight: 'bold', color: cores.dolar },
          tabBarIcon: () => (
            <MaterialIcons
              name='currency-exchange'
              size={24}
              color={cores.dolar}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Cep'
        component={CepScreen}
        options={{
          tabBarLabel: 'CEP',
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: { fontWeight: 'bold', color: cores.cep },
          tabBarIcon: () => (
            <MaterialIcons name='local-shipping' size={24} color={cores.cep} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
