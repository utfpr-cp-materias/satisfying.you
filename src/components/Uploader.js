import React from 'react';
import { View, Text, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { pick } from '@react-native-documents/picker';

const Uploader = ({ label, value, onChange }) => {
  const handleSelectImage = async () => {
    try {
      const [pickResult] = await pick();
      onChange(pickResult.uri);
    } catch (err) {
      Alert.alert('Erro', 'Não foi possível selecionar o arquivo.');
      console.error(err);
    }
  };

  // Adapta a fonte da imagem para `require()` (número) ou URI (string)
  const imageSource = typeof value === 'number' ? value : { uri: value };

  return (
    <View>
      {label && <Text style={styles.text}>{label}</Text>}

      <TouchableOpacity onPress={handleSelectImage} style={styles.input}>
        {value ? (
          <View>
            <Image
              source={imageSource}
              style={styles.previewImage}
            />
          </View>
        ) : (
          <Text style={styles.placeholder}>Câmera/Galeria de imagens</Text>
        )}
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#FFF',
    fontFamily: 'AveriaLibre-Regular',
  },
  placeholder: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#939393',
    fontSize: 14,
  },
  input: {
    height: 50,
    width: 200,
    backgroundColor: '#FFF',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    width: 40,
    height: 40,
  },
});

export default Uploader;
