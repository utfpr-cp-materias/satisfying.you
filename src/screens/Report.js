import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { PieChart } from 'react-native-gifted-charts';

const Report = (props) => {
  const pieData = [
    { value: 12.5, color: '#F1CE7E', text: 'Excelente' },
    { value: 32.5, color: '#6994FE', text: 'Bom' },
    { value: 32.5, color: '#5FCDA4', text: 'Neutro' },
    { value: 12.5, color: '#EA7288', text: 'Ruim' },
    { value: 12.5, color: '#53D8D8', text: 'Péssimo' },
  ];

  return (
    <View style={styles.container}>
      <PieChart
        data={pieData}
        radius={100}
      />
      <View style={styles.labels}>
        {pieData.map(item => (
          <View key={item.text} style={styles.labelContainer}>
            <View style={[styles.label, { backgroundColor: item.color }]} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 50,
  },
  labels: {
    gap: 10,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  label: {
    height: 20,
    width: 20,
  },
  text: {
    color: '#FFF',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
  },
});

export default Report;
