import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { validateEmail } from '../utils/validator';

import Button from '../components/Button';
import Input from '../components/Input';

const ForgotPassword = (props) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleRecoverPassword = () => {
    const isEmailValid = validateEmail(email);

    if (!isEmailValid) {
      setError('E-mail parece ser inválido');
    } else {
      setError('');
      props.navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Input label="E-mail" value={email} onChangeText={setEmail} placeholder="Insira o e-mail" error={error} />

        <Button onPress={handleRecoverPassword} text="RECUPERAR" fontSize={18} />
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
    justifyContent: 'center',
  },
  bodyContainer: {
    height: '60%',
    justifyContent: 'space-between',
  },
});

export default ForgotPassword;
