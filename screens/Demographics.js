import React, { Component } from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text
} from 'react-native';
import { Card, Divider } from 'react-native-elements';
import PieChart from './PieChart';

const peopleData = [
  { label: 'Female', value: 51.5 },
  { label: 'Male', value: 48.5 }
];
const peopleDataIn2031 = [
  { label: 'Female', value: 51.4 },
  { label: 'Male', value: 48.6 }
];

const PieChartCard = ({ mainValue, mainLabel, pieChartTitle }) => {
  return (
    <Card
      containerStyle={{
        width: Dimensions.get('screen').width - 20,
        margin: 0
      }}
    >
      <Text style={styles.mainValue}>{mainValue}</Text>
      <Text style={styles.mainLabel}>{mainLabel}</Text>
      <Text style={styles.pieChartTitle}>{pieChartTitle}</Text>
      <PieChart pieHeight={270} pieWidth={270} data={peopleData} />
    </Card>
  );
};

const Population = () => (
  <View>
    <Text style={styles.title}>Population</Text>
    <PieChartCard
      mainLabel="People"
      mainValue={'25,123,231'}
      pieChartTitle={'Sex'}
    />
    <PieChartCard
      mainLabel="Projected in 2031"
      mainValue={'33,597,033'}
      pieChartTitle={'Projected by sex in 2031'}
    />
  </View>
);

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
  title: {
    color: 'rgba(0, 0, 0, 0.5)',
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
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
