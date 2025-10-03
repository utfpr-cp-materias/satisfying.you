import { Modal, Text, View, StyleSheet } from 'react-native';

import Button from '../components/Button';

const ModalComponent = ({ modalVisible, setModalVisible, handleConfirm }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Tem certeza de apagar essa pesquisa?
          </Text>

          <View style={styles.buttonsContainer}>
            <Button variant="red" text="SIM" onPress={handleConfirm} width="48%" />
            <Button variant="blue" text="CANCELAR" onPress={() => setModalVisible(false)} width="48%" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  container: {
    width: '50%',
    backgroundColor: '#2B1F5C',
    padding: 20,
    alignItems: 'center',
    gap: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
    color: '#FFF',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default ModalComponent;
