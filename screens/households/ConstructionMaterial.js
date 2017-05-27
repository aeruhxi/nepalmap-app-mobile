import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PieChartCard from '../PieChartCard';

// TODO: Fetch data from server
const foundationData = [
  { label: 'Mud Bonded', value: 19 },
  { label: 'Wooden Pillar', value: 1 },
  { label: 'Cement Bonded', value: 38 },
  { label: 'RCC with Pillar', value: 40 },
  { label: 'Others', value: 0 },
  { label: 'Not Stated', value: 2 }
];

export default class ConstructionMaterial extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{'Household Construction Material'}</Text>
        <PieChartCard
          pieChartTitle={'Household by type of foundation'}
          data={foundationData}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  title: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 16
  }
});
