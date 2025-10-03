import { useContext, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { AppContext } from '../context/AppContext';

import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';

const Home = (props) => {
  const [search, setSearch] = useState('');

  const { cards } = useContext(AppContext);

  const handleNewSearch = () => {
    props.navigation.navigate('NewSearch');
  };

  return (
    <View style={styles.container}>
      <Input value={search} onChangeText={setSearch} placeholder="Insira o termo de busca..." icon="search" />

      <FlatList
        horizontal={true}
        contentContainerStyle={styles.cardsContainer}
        showsHorizontalScrollIndicator={false}
        data={cards}
        renderItem={({ item }) => <Card name={item.name} date={item.date} image={item.image} id={item.id} />}
        keyExtractor={item => item.id}
      />

      <Button onPress={handleNewSearch} text="NOVA PESQUISA" fontSize={18} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    gap: 10,
    padding: 15,
    justifyContent: 'center',
  },
  cardsContainer: {
    alignItems: 'center',
    gap: 20,
  },
});

export default Home;
