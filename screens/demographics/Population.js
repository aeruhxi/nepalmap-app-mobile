import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PieChartCard from '../PieChartCard';
import { observer, inject } from 'mobx-react/native';

@inject('appStore')
@observer
class Population extends Component {
  render() {
    const { population } = this.props.appStore.demographics;
    return (
      <View>
        <Text style={styles.title}>
          {'Population'}
        </Text>
        <PieChartCard
          mainLabel={population[0].name}
          mainValue={population[0].value}
          pieChartTitle={'Sex'}
          data={population[0].data}
        />
        <PieChartCard
          mainLabel={population[1].name}
          mainValue={population[1].value}
          pieChartTitle={'Projected by sex in 2031'}
          data={population[1].data}
        />
      </View>
    );
  }
}

export default Population;

const styles = StyleSheet.create({
  title: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 16
  }
});
