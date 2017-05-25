import React, { Component } from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';

export default class Education extends Component {
  static navigationOptions = {
    title: 'Education',
    headerStyle: {
      backgroundColor: 'red',
      marginTop: StatusBar.currentHeight
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Education</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight
  }
});
