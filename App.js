import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppProvider from './src/context/AppContext';

import Login from './src/screens/Login';
import Drawer from './src/screens/Drawer';
import Register from './src/screens/Register';
import ForgotPassword from './src/screens/ForgotPassword';
import NewSearch from './src/screens/NewSearch';
import ChangeSearch from './src/screens/ChangeSearch';
import Actions from './src/screens/Actions';
import CollectData from './src/screens/CollectData';
import SurveyComplete from './src/screens/SurveyComplete';
import Report from './src/screens/Report';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{
          headerTintColor: '#573FBA',
          headerTitleStyle: {
            fontFamily: 'AveriaLibre-Regular',
            color: '#fff',
            fontSize: 24,
          },
          headerStyle: {
            height: 45,
            backgroundColor: '#2B1D62',
            elevation: 0,
          },
        }}>
          <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ title: 'Nova Conta' }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: 'Recuperação de senha' }} />
          <Stack.Screen name="NewSearch" component={NewSearch} options={{ title: 'Nova Pesquisa' }} />
          <Stack.Screen name="CollectData" component={CollectData} options={{ headerShown: false }} />
          <Stack.Screen name="ChangeSearch" component={ChangeSearch} options={{ title: 'Modificar Pesquisa' }} />
          <Stack.Screen name="Report" component={Report} options={{ title: 'Relatório' }} />
          <Stack.Screen name="SurveyComplete" component={SurveyComplete} options={{ headerShown: false }} />
          <Stack.Screen name="Actions" component={Actions} options={({ route }) => ({
            title: route.params.card.name,
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
