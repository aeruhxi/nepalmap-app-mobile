import React, { Component } from 'react';
import { StatusBar, ScrollView, StyleSheet } from 'react-native';
import Poverty from './Poverty';

export default class Demographics extends Component {
  static navigationOptions = {
    title: 'Human Development',
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
        <Poverty />
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
