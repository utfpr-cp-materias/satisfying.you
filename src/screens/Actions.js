import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

const Actions = (props) => {
  const { card } = props.route.params;

  const goToChangeSearch = () => {
    props.navigation.navigate('ChangeSearch', { card });
  };

  const goToCollectData = () => {
    props.navigation.navigate('CollectData', { card });
  };


  const goToReport = () => {
    props.navigation.navigate('Report');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardContainer} onPress={goToChangeSearch}>
        <Icon name="file-document-edit-outline" size={60} color="#FFF" />
        <Text style={styles.cardText}>Modificar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardContainer} onPress={goToCollectData}>
        <Icon name="checkbox-multiple-outline" size={60} color="#FFF" />
        <Text style={styles.cardText}>Coletar dados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardContainer} onPress={goToReport}>
        <IconMaterial name="donut-large" size={60} color="#FFF" />
        <Text style={styles.cardText}>Relatório</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    padding: 30,
    gap: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#312464',
    flex: 1,
    height: 130,
    borderRadius: 10,
    gap: 10,
  },
  cardText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
  },
});

export default Actions;
