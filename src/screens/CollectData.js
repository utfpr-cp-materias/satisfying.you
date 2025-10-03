import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const CollectData = (props) => {
  const { card } = props.route.params;

  const goToSurveyComplete = () => {
    props.navigation.navigate('SurveyComplete');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>O que você achou do {card.name}?</Text>

      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.iconContainer} onPress={goToSurveyComplete}>
          <Icon name="sentiment-very-dissatisfied" size={60} color="#D71616" />
          <Text style={styles.iconText}>Péssimo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={goToSurveyComplete}>
          <Icon name="sentiment-dissatisfied" size={60} color="#FF360A" />
          <Text style={styles.iconText}>Ruim</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={goToSurveyComplete}>
          <Icon name="sentiment-neutral" size={60} color="#FFC632" />
          <Text style={styles.iconText}>Neutro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={goToSurveyComplete}>
          <Icon name="sentiment-satisfied-alt" size={60} color="#37BD6D" />
          <Text style={styles.iconText}>Bom</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={goToSurveyComplete}>
          <Icon name="sentiment-very-satisfied" size={60} color="#25BC22" />
          <Text style={styles.iconText}>Excelente</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    padding: 30,
    justifyContent: 'center',
    gap: 50,
  },
  cardsContainer: {
    backgroundColor: '#372775',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
  },
});

export default CollectData;
