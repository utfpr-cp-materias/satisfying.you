import { useContext, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { AppContext } from '../context/AppContext';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';
import Input from '../components/Input';
import DatePicker from '../components/DatePicker';
import Uploader from '../components/Uploader';
import ModalComponent from '../components/ModalComponent';

const ChangeSearch = (props) => {
  const { card } = props.route.params;

  const cardData = {
    ...card,
    date: new Date(card.date),
  };

  const [name, setName] = useState(cardData.name);
  const [date, setDate] = useState(cardData.date);
  const [image, setImage] = useState(cardData.image);

  const [nameError, setNameError] = useState('');
  const [dateError, setDateError] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const { removeCard, updateCard } = useContext(AppContext);

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

  const handleSave = () => {
    const isValid = validateFields();

    if (isValid) {
      const updatedCard = {
        ...cardData,
        name,
        date,
        image,
      };

      updateCard(updatedCard);

      props.navigation.navigate('Drawer');
    }
  };

  const handleDelete = () => {
    setModalVisible(true);
  };

  const handleConfirm = () => {
    setName('');
    setDate('');
    setNameError('');
    setDateError('');
    setImage(null);
    setModalVisible(false);
    console.log(cardData.id);
    removeCard(cardData.id);
    props.navigation.navigate('Drawer');

  };

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Input label="Nome" value={name} onChangeText={setName} placeholder="Insira o e-mail" error={nameError} />
        <DatePicker label="Data" value={date} onChange={setDate} placeholder="Digite a data" error={dateError} />
        <Uploader label="Imagem" value={image} onChange={setImage} />
      </View>

      <Button onPress={handleSave} text="SALVAR" fontSize={14} />

      <TouchableOpacity style={styles.buttonContainer} onPress={handleDelete}>
        <Icon name="trash-can-outline" size={20} color="#FFF" />
        <Text style={styles.buttonText}>Apagar</Text>
      </TouchableOpacity>

      <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} handleConfirm={handleConfirm} />
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
  buttonContainer: {
    position: 'absolute',
    right: 20,
    bottom: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 10,
  },
});

export default ChangeSearch;
