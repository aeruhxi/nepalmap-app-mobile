import React, { Component } from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text
} from 'react-native';
import { Card } from 'react-native-elements';
import PieChart from './PieChart';

const peopleData = [
  { label: 'Female', value: 51.5 },
  { label: 'Male', value: 48.5 }
];

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
      <View style={styles.container}>
        <Text style={styles.title}>Population</Text>
        <Card
          containerStyle={{
            width: Dimensions.get('screen').width - 20,
            margin: 0
          }}
        >
          <Text style={styles.mainValue}>26,123,231</Text>
          <Text style={styles.mainLabel}>People</Text>
          <Text style={styles.pieChartTitle}>Sex</Text>
          <PieChart pieHeight={270} pieWidth={270} data={peopleData} />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 16
  },
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  mainValue: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  mainLabel: {
    fontSize: 20
  },
  pieChartTitle: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
