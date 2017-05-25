import React, { Component } from 'react';
import { StatusBar, ScrollView, StyleSheet } from 'react-native';
import Population from './Population';

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
