import React, { Component } from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native';
import { Text, Card } from 'react-native-elements';
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
        <Text h4>Population</Text>
        <Card
          containerStyle={{
            width: Dimensions.get('screen').width - 20,
            margin: 0
          }}
        >
          <Text>Sex</Text>
          <PieChart pieHeight={270} pieWidth={270} data={peopleData} />
        </Card>
      </View>
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
