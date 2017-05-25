import React, { Component } from 'react';
import { StatusBar, ScrollView, Dimensions } from 'react-native';

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
