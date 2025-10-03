import { useState } from 'react';
import { View, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePicker = ({ label, error, value, placeholder, onChange }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    onChange(date);
    hideDatePicker();
  };

  return (
    <View>
      {label && <Text style={styles.text}>{label}</Text>}

      <TouchableWithoutFeedback onPress={showDatePicker}>
        <View style={styles.input}>
          <Text style={value ? styles.inputText : styles.placeholder}>{value ? value.toLocaleDateString('pt-BR') : placeholder}</Text>
          <Icon style={styles.icon} name="calendar-month" size={20} color="#8B8B8B" />
        </View>
      </TouchableWithoutFeedback>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {error && <Text style={styles.textError}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#FFF',
    fontFamily: 'AveriaLibre-Regular',
  },
  input: {
    height: 30,
    backgroundColor: '#FFF',
    paddingVertical: 0,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textError: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 12,
    color: '#FD7979',
  },
  inputText: {
    backgroundColor: '#FFF',
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5',
    fontSize: 16,
  },
  placeholder: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#8B8B8B',
    fontSize: 16,
  },
});

export default DatePicker;
