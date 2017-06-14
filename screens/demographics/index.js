import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Population from './Population';
import Age from './Age';
import LifeExpectancyAndIncome from './LifeExpectancyAndIncome';
import Language from './Language';
import CasteAndEthnicGroups from './CasteAndEthnicGroups';
import Disabled from './Disabled';

export default class Demographics extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Population />
        <Age />
        <LifeExpectancyAndIncome />
        <Language />
        <CasteAndEthnicGroups />
        <Disabled />
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
