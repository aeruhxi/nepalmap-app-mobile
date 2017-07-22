import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator, StackNavigator, DrawerItems } from 'react-navigation';
import appStore from './stores/AppStore';
import { Provider } from 'mobx-react/native';
import Demographics from './screens/demographics';
import Education from './screens/Education';
import HumanDevelopment from './screens/human-development';
import Households from './screens/households';
import SearchBar from './screens/SearchBar';
import Search from './screens/Search';

const CustomDrawerComponent = props =>
  <View>
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>Nepal Map</Text>
    </View>
    <DrawerItems {...props} />
  </View>;

const defaultNavigationOptions = ({ navigation }) => ({
  header: <SearchBar navigation={navigation} />
});

const MainDrawerNavigator = DrawerNavigator(
  {
    Demographics: {
      screen: StackNavigator(
        { Demographics: { screen: Demographics } },
        { navigationOptions: defaultNavigationOptions }
      )
    },

    Education: {
      screen: StackNavigator(
        { Education: { screen: Education } },
        { navigationOptions: defaultNavigationOptions }
      )
    },

    HumanDevelopment: {
      screen: StackNavigator(
        { 'Human Development': { screen: HumanDevelopment } },
        { navigationOptions: defaultNavigationOptions }
      )
    },

    Households: {
      screen: StackNavigator(
        { Households: { screen: Households } },
        { navigationOptions: defaultNavigationOptions }
      )
    }
  },
  {
    contentComponent: CustomDrawerComponent
  }
);

const Root = StackNavigator(
  {
    MainDrawerNavigator: { screen: MainDrawerNavigator },
    Search: { screen: Search }
  },
  {
    navigationOptions: { header: null }
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider appStore={appStore}>
        <Root />
      </Provider>
    );
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
