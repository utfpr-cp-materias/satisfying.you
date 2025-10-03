import { useContext, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { AppContext } from '../context/AppContext';

import { validateEmail } from '../utils/validator';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../components/Button';
import Input from '../components/Input';

const Login = (props) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { userEmail, setUserEmail } = useContext(AppContext);

  const goToRegister = () => {
    props.navigation.navigate('Register');
  };

  const goToForgotPassword = () => {
    props.navigation.navigate('ForgotPassword');
  };

  const handleLogin = () => {
    const isEmailValid = validateEmail(userEmail);

    if (isEmailValid) {
      setError('');
      props.navigation.navigate('Drawer');
    } else {
      setError('E-mail e/ou senha inválidos.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Satisfying.you</Text>
        <Icon name="sentiment-satisfied-alt" size={32} color="white" />
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.inputsContainer}>
          <Input label="E-mail" type="email" value={userEmail} onChangeText={setUserEmail} placeholder="Insira o e-mail" keyboardType="email-address" />
          <Input label="Senha" value={password} onChangeText={setPassword} placeholder="Insira sua senha" error={error} secureTextEntry={true} />
        </View>

        <Button onPress={handleLogin} text="Entrar" fontSize={18} />
      </View>

      <View style={styles.buttonsContainer}>
        <Button onPress={goToRegister} variant="blue" text="Criar minha conta" fontSize={14} padding={2} />
        <Button onPress={goToForgotPassword} variant="grey" text="Esqueci minha senha" fontSize={14} padding={2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 120,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  title: {
    fontSize: 28,
    color: '#FFF',
    fontFamily: 'AveriaLibre-Regular',
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    marginTop: 10,
    gap: 5,
    justifyContent: 'space-between',
  },
  inputsContainer: {
    gap: 10,
  },
});

export default Login;
