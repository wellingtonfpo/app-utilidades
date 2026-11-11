import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StackRoutes } from './src/routes/StackRoutes';
import { TabRoutes } from './src/routes/TabsRoutes';
import { DrawerRoutes } from './src/routes/DrawerRoutes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      {/* <StackRoutes /> */}
      {/* <TabRoutes /> */}
      <DrawerRoutes />
    </NavigationContainer>
  );
}
