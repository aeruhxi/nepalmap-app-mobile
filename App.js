import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { DrawerNavigator, StackNavigator, DrawerItems } from 'react-navigation';
import Demographics from './screens/demographics';
import Education from './screens/Education';

const CustomDrawerComponent = props => (
  <View>
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>Nepal Map</Text>
    </View>
    <DrawerItems {...props} />
  </View>
);

const Root = DrawerNavigator(
  {
    Demographics: {
      screen: StackNavigator({
        route1: { screen: Demographics }
      })
    },

    education: {
      screen: StackNavigator({
        route1: { screen: Education }
      })
    }
  },
  {
    contentComponent: CustomDrawerComponent
  }
);

export default class App extends React.Component {
  render() {
    return <Root />;
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    height: 140,
    backgroundColor: '#f00',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logoText: {
    color: '#fff',
    fontSize: 32,
    marginBottom: 15
  }
});
