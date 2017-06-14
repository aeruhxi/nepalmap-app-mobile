import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PieChartCard from '../PieChartCard';
import InfoCard from '../InfoCard';

import { population } from './data';

export default class Population extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>{'Population'}</Text>
        <InfoCard data={population.people} label="People" />
        <PieChartCard pieChartTitle={'Sex'} data={population.sexRatio} />
        <InfoCard data={population.projection} label="Projected in 2031" />
        <PieChartCard
          pieChartTitle={'Projected by sex in 2031'}
          data={population.projectedSexRatio}
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
