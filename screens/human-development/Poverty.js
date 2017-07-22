import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PieChartCard from '../PieChartCard';

// TODO: fetch data from servers
const povertyData = [
  { label: 'In Poverty', value: 7.6 },
  { label: 'Not in Poverty', value: 92.4 }
];

export default class Poverty extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>
          {'Poverty Rate'}
        </Text>
        <PieChartCard
          mainLabel="In Poverty"
          mainValue={'128,297'}
          pieChartTitle={'In Poverty'}
          data={povertyData}
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
