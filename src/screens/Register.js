import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { validateEmail } from '../utils/validator';

import Button from '../components/Button';
import Input from '../components/Input';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    const isEmailValid = validateEmail(email);

    if (email.length === 0 || password.length === 0 || repeatedPassword.length === 0) {
      setError('Todos os campos são obrigatórios');
    } else if (!isEmailValid) {
      setError('E-mail inválido');
    } else if (password !== repeatedPassword) {
      setError('O campo repetir senha difere da senha');
    } else {
      setError('');
      props.navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Input label="E-mail" value={email} onChangeText={setEmail} placeholder="Insira o e-mail" keyboardType="email-address" />
        <Input label="Senha" value={password} onChangeText={setPassword} placeholder="Insira sua senha" secureTextEntry={true} />
        <Input label="Repetir Senha" value={repeatedPassword} onChangeText={setRepeatedPassword} placeholder="Repita sua senha" error={error} secureTextEntry={true} />
      </View>

      <Button onPress={handleRegister} text="CADASTRAR" fontSize={18} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    paddingVertical: 10,
    paddingHorizontal: 120,
  },
  bodyContainer: {
    flex: 1,
    gap: 10,
  },
});

export default Register;
