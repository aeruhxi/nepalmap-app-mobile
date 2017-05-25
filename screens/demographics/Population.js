import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PieChartCard from '../PieChartCard';

// TODO: Fetch data from server
const peopleData = [
  { label: 'Female', value: 51.5 },
  { label: 'Male', value: 48.5 }
];
const peopleDataIn2031 = [
  { label: 'Female', value: 51.4 },
  { label: 'Male', value: 48.6 }
];

export default class Population extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>{'Population'}</Text>
        <PieChartCard
          mainLabel="People"
          mainValue={'25,123,231'}
          pieChartTitle={'Sex'}
          data={peopleData}
        />
        <PieChartCard
          mainLabel="Projected in 2031"
          mainValue={'33,597,033'}
          pieChartTitle={'Projected by sex in 2031'}
          data={peopleDataIn2031}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 16
  }
});
