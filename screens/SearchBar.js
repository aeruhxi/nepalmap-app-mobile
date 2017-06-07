import React, { Component } from 'react';
import { Text, StatusBar, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default class SearchBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <Icon
            name="menu"
            color="gray"
            underlayColor="white"
            style={{ paddingLeft: 15, justifyContent: 'center' }}
            onPress={() => this.props.navigation.navigate('DrawerOpen')}
          />
          <Text
            style={styles.searchText}
            onPress={() => this.props.navigation.navigate('Search')}
          >
            Search
          </Text>
        </View>
        <Text style={styles.title}>
          {this.props.navigation.state.routeName}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 112 + StatusBar.currentHeight,
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingRight: 10,
    elevation: 4
  },
  searchBar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    elevation: 4,
    top: StatusBar.currentHeight + 10,
    left: 10,
    right: 10,
    height: 48,
    position: 'absolute'
  },
  searchText: {
    width: '100%',
    marginLeft: 20,
    fontSize: 20,
    alignContent: 'center',
    color: '#828282'
  },
  title: {
    color: 'white',
    fontSize: 24,
    paddingBottom: 10
  }
});
