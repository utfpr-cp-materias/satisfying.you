import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Home';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomDrawer from '../components/CustomDrawer';

const DrawerNavigator = createDrawerNavigator();

const HomeDrawerIcon = ({ color, size }) => (
  <Icon
    name="file-document-outline"
    size={size}
    color={color}
  />
);

const Drawer = () => {
  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        headerTintColor: '#FFF',
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
        drawerStyle: {
          width: 250,
        },
        drawerLabelStyle: {
          fontFamily: 'AveriaLibre-Regular',
          fontSize: 18,
          color: '#FFF',
        },
        drawerActiveTintColor: '#FFF',
        drawerItemStyle: {
          backgroundColor: 'transparent',
        },
      }}
      drawerContent={CustomDrawer}
    >
      <DrawerNavigator.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          drawerLabel: 'Pesquisas',
          drawerIcon: HomeDrawerIcon,
        }}
      />
    </DrawerNavigator.Navigator>
  );
};

export default Drawer;
