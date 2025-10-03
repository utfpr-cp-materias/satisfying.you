import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const buttonVariants = {
  green: '#37BD6D',
  blue: '#419ED7',
  grey: '#B5C7D1',
  red: '#FF8383',
};

const Button = ({ variant = 'green', fontSize = 16, padding = 5, text, onPress, width = '100%' }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { padding },
        { width },
        { backgroundColor: buttonVariants[variant] },
      ]}
      onPress={onPress}>
      <Text style={[styles.text, { fontSize }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    elevation: 5,
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default Button;
