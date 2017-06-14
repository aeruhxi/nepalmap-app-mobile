import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PieChartCard from '../PieChartCard';
import InfoCard from '../InfoCard';

import { disabled } from './data';

export default class Disabled extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{'Disabled'}</Text>
        <InfoCard data={disabled.percentage} label="Are disabled" />
        <PieChartCard
          pieChartTitle={'Disability'}
          data={disabled.distribution}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 16
  },
  container: {
    marginTop: 20
  }
});
