import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InfoCard from '../InfoCard';
import BarChartCard from '../BarChartCard';

import { casteAndEthnicGroups } from './data';

export default class CasteAndEthnicGroups extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{'Caste and Ethnic Groups'}</Text>
        <InfoCard
          data={casteAndEthnicGroups.mostPopulous}
          label="Most populous caste or ethnic group"
        />
        <BarChartCard
          barChartTitle="Population by caste or ethnic group"
          barChartHeight={400}
          data={casteAndEthnicGroups.distribution}
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
