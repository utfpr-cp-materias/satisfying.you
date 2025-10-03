import { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { AppContext } from '../context/AppContext';

import Button from '../components/Button';
import Input from '../components/Input';
import DatePicker from '../components/DatePicker';
import Uploader from '../components/Uploader';

const NewSearch = (props) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState(null);
  const [nameError, setNameError] = useState('');
  const [dateError, setDateError] = useState('');

  const { addCard } = useContext(AppContext);

  const validateFields = () => {
    let isValid = true;

    if (name.length === 0) {
      setNameError('Preencha no nome da pesquisa');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!date) {
      setDateError('Preencha a data');
      isValid = false;
    } else {
      setDateError('');
    }

    if (!image) {
      setImage(require('../../assets/images/party.png'));
    }

    return isValid;
  };

  const handleNewSearch = () => {
    const isValid = validateFields();

    if (isValid) {
      const card = {
        name,
        date,
        image,
      };

      addCard(card);

      props.navigation.navigate('Drawer');
    }

  };

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Input label="Nome" value={name} onChangeText={setName} placeholder="Insira o nome" error={nameError} />
        <DatePicker label="Data" value={date} onChange={setDate} placeholder="Digite a data" error={dateError} />
        <Uploader label="Imagem" value={image} onChange={setImage} />
      </View>

      <Button onPress={handleNewSearch} text="CADASTRAR" fontSize={14} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    paddingVertical: 10,
    paddingHorizontal: 120,
    position: 'relative',
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
});

export default NewSearch;
