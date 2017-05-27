import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InfoCard from '../InfoCard';

export default class Households extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>{'Households'}</Text>
        <InfoCard
          data="435,544"
          label="Households"
          infoText="about 10 percent of the figure in Nepal: 5,423,297"
        />
        <InfoCard
          data="4.00"
          label="Average household size"
          infoText="about 80 percent of the figure in Nepal: 4.89"
        />
        <InfoCard
          data="109.84"
          label="Men per 100 women"
          infoText="about 20 percent higher than the figure in Nepal: 94.16"
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
