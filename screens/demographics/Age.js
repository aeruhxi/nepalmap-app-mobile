import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PieChartCard from '../PieChartCard';
import BarChartCard from '../BarChartCard';

// TODO: Fetch data from server
const pieData = [
  { label: 'Under 20', value: 46 },
  { label: '20 to 59', value: 45.9 },
  { label: '60 and above', value: 8.1 }
];

const barData = [
  { label: '0-9', value: 22 },
  { label: '10-19', value: 24 },
  { label: '20-29', value: 17 },
  { label: '30-39', value: 22 },
  { label: '40-49', value: 10 },
  { label: '50-59', value: 7 },
  { label: '60-69', value: 5 },
  { label: '70-79', value: 2 },
  { label: '80+', value: 1 }
];

export default class Age extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {'Age'}
        </Text>
        <PieChartCard
          mainLabel="Median age"
          mainValue={'22'}
          pieChartTitle={'Popuation by age category'}
          data={pieData}
        />
        <BarChartCard
          barChartTitle="Population by 10-year age range"
          barChartHeight={500}
          data={barData}
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
