import { useContext } from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';

import { AppContext } from '../context/AppContext';

import Icon from 'react-native-vector-icons/MaterialIcons';

const LogoutDrawerIcon = ({ size }) => (
  <Icon
    name="logout"
    size={size}
    color="#FFF"
  />
);

const CustomDrawer = (props) => {
  const { userEmail, setUserEmail } = useContext(AppContext);

  const handleLogout = () => {
    setUserEmail('');
    props.navigation.push('Login');
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.textHeader}>{userEmail}</Text>
        <View style={styles.divider} />
      </View>

      <DrawerItemList {...props} />

      <View style={styles.footer}>
        <DrawerItem
          labelStyle={styles.text}
          label="Sair"
          onPress={handleLogout}
          icon={LogoutDrawerIcon}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B1F5C',
  },
  textHeader: {
    color: '#FFF',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
    paddingVertical: 15,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    color: '#FFF',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
});

export default CustomDrawer;
