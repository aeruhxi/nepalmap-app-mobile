import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { DrawerNavigator, StackNavigator, DrawerItems } from 'react-navigation';
import Demographics from './screens/demographics';
import Education from './screens/Education';
import HumanDevelopment from './screens/human-development';
import Households from './screens/households';
import { Icon } from 'react-native-elements';

const CustomDrawerComponent = props => (
  <View>
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>Nepal Map</Text>
    </View>
    <DrawerItems {...props} />
  </View>
);

const defaultNavigationOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: 'red',
    marginTop: StatusBar.currentHeight
  },
  headerTitleStyle: {
    color: '#fff'
  },
  headerLeft: (
    <Icon
      name="menu"
      style={{ marginLeft: 15 }}
      color="white"
      underlayColor="red"
      onPress={() => navigation.navigate('DrawerOpen')}
    />
  )
});

const Root = DrawerNavigator(
  {
    Demographics: {
      screen: StackNavigator(
        {
          route1: {
            screen: Demographics
          }
        },
        { navigationOptions: defaultNavigationOptions }
      )
    },

    Education: {
      screen: StackNavigator(
        {
          route1: { screen: Education }
        },
        { navigationOptions: defaultNavigationOptions }
      )
    },

    HumanDevelopment: {
      screen: StackNavigator(
        {
          route1: { screen: HumanDevelopment }
        },
        { navigationOptions: defaultNavigationOptions }
      )
    },

    Households: {
      screen: StackNavigator(
        {
          route1: { screen: Households }
        },
        { navigationOptions: defaultNavigationOptions }
      )
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
