import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Households from './Households';
import ConstructionMaterial from './ConstructionMaterial';

export default class Demographics extends Component {
  static navigationOptions = {
    title: 'Households'
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Households />
        <ConstructionMaterial />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
});
