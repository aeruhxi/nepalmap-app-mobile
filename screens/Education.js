import React, { Component } from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';

export default class Education extends Component {
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
