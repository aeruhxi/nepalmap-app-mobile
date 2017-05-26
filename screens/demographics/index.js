import React, { Component } from 'react';
import { StatusBar, ScrollView, StyleSheet } from 'react-native';
import Population from './Population';
import Age from './Age';

export default class Demographics extends Component {
  static navigationOptions = {
    title: 'Demographics',
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
        <Population />
        <Age />
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
