import { View, TextInput, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Input = ({ label, error, icon, autoCapitalize = 'none', ...props }) => {
  const paddingLeft = icon ? 35 : 10;

  return (
    <View style={styles.container}>
      {icon && <Icon style={styles.icon} name={icon} size={20} color="#8B8B8B" />}

      {label && <Text style={styles.text}>{label}</Text>}
      <TextInput style={[styles.input, { paddingLeft }]} autoCapitalize={autoCapitalize} {...props} placeholderTextColor="#8B8B8B" />

      {error && <Text style={styles.textError}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  text: {
    fontSize: 16,
    color: '#FFF',
    fontFamily: 'AveriaLibre-Regular',
  },
  input: {
    height: 30,
    backgroundColor: '#FFF',
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5',
    fontSize: 16,
    paddingVertical: 0,
    paddingHorizontal: 10,
  },
  textError: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 12,
    color: '#FD7979',
  },
  icon: {
    position: 'absolute',
    left: 8,
    top: 3,
    zIndex: 10,
  },
});

export default Input;
