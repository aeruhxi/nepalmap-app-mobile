import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InfoCard from '../InfoCard';
import BarChartCard from '../BarChartCard';

import { language } from './data';

export default class Language extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{'Language'}</Text>
        <InfoCard
          data={language.mostSpoken}
          label="Language most spoken at home"
        />
        <BarChartCard
          barChartTitle="Population by language most spoken at home"
          barChartHeight={400}
          data={language.distribution}
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
