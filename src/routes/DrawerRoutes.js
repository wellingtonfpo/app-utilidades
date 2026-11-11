import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

import HomeScreen from '../screens/HomeScreen';
import ImcScreen from '../screens/ImcScreen';
import ClimaScreen from '../screens/ClimaScreen';
import DolarScreen from '../screens/DolarScreen';
import CepScreen from '../screens/CepScreen';
import cores from '../styles/cores';

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: cores.primaria },
        headerTintColor: cores.branco,
        headerTitleStyle: { fontWeight: 'bold' },
        drawerPosition: 'left',
        drawerType: 'back',
      }}
    >
      {/* <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'App Utilidades' }}
      /> */}
      <Drawer.Screen
        name='Imc'
        component={ImcScreen}
        options={{
          title: 'Calculadora IMC',
          drawerLabel: 'Calculadora IMC',
          drawerActiveTintColor: cores.imc,
          drawerLabelStyle: { fontWeight: 'bold', color: cores.imc },
          drawerIcon: () => (
            <MaterialIcons name='calculate' size={24} color={cores.imc} />
          ),
        }}
      />
      <Drawer.Screen
        name='Clima'
        component={ClimaScreen}
        options={{
          title: 'Previsão do Tempo',
          drawerLabel: 'Previsão do Tempo',
          drawerActiveTintColor: cores.clima,
          drawerLabelStyle: { fontWeight: 'bold', color: cores.clima },
          drawerIcon: () => (
            <MaterialIcons name='cloud' size={24} color={cores.clima} />
          ),
        }}
      />
      <Drawer.Screen
        name='Dolar'
        component={DolarScreen}
        options={{
          title: 'Cotação do Dolar',
          drawerLabel: 'Cotação do Dolar',
          drawerActiveTintColor: cores.dolar,
          drawerLabelStyle: { fontWeight: 'bold', color: cores.dolar },
          drawerIcon: () => (
            <MaterialIcons
              name='currency-exchange'
              size={24}
              color={cores.dolar}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Cep'
        component={CepScreen}
        options={{
          title: 'Consulta CEP',
          drawerLabel: 'Consulta CEP',
          drawerActiveTintColor: cores.cep,
          drawerLabelStyle: { fontWeight: 'bold', color: cores.cep },
          drawerIcon: () => (
            <MaterialIcons name='local-shipping' size={24} color={cores.cep} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
