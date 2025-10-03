import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SurveyComplete = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.goBack();
    }, 3000);
  }, [props.navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Obrigado por participar da pesquisa!</Text>
      <Text style={styles.title}>Aguardamos você no próximo ano!</Text>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    padding: 30,
    justifyContent: 'center',
    gap: 20,
  },
  title: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 24,
  },
});

export default SurveyComplete;
