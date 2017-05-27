import React, { Component } from 'react';
import { StatusBar, ScrollView, StyleSheet } from 'react-native';
import Households from './Households';
import ConstructionMaterail from './ConstructionMaterial';

export default class Demographics extends Component {
  static navigationOptions = {
    title: 'Households',
    headerStyle: {
      backgroundColor: 'red',
      marginTop: StatusBar.currentHeight
    },
    headerTitleStyle: {
      color: '#fff'
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Households />
        <ConstructionMaterail />
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
