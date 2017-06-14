import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InfoCard from '../InfoCard';

import { lifeExpectancyAndIncome } from './data';

export default class LifeExpectancyAndIncome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{'Life Expectancy and Income'}</Text>
        <InfoCard
          data={lifeExpectancyAndIncome.expectancy}
          label="Life expectancy in years"
        />
        <InfoCard
          data={lifeExpectancyAndIncome.perCapita}
          label="Per capita income in US dollars"
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
