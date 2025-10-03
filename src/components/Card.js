import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({ name, date, image, id }) => {
  const navigation = useNavigation();

  const goToPage = () => {
    const cardData = {
      id,
      name,
      image,
      date: date.toISOString(),
    };

    navigation.navigate('Actions', { card: cardData });
  };

  // Adapta a fonte da imagem para `require()` (número) ou URI (string)
  const imageSource = typeof image === 'number' ? image : { uri: image };

  return (
    <TouchableOpacity style={styles.container} onPress={goToPage}>
      <View style={styles.imageContainer}>
        <Image
          source={imageSource}
          style={styles.image}
        />
      </View>

      <View>
        <Text style={styles.title}>{name.toUpperCase()}</Text>
        <Text style={styles.text}>{date.toLocaleDateString('pt-BR')}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 110,
    borderRadius: 10,
    backgroundColor: '#FFF',
    padding: 5,
  },
  image: {
    height: 50,
    width: 50,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#3F92C5',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
  },
  text: {
    color: '#8B8B8B',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 10,
  },
});

export default Card;
