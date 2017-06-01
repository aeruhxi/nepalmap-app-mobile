import React, { Component } from 'react';
import { Text, StatusBar, StyleSheet, View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Search extends Component {
  constructor(props) {
    // Search class takes navigation object as a prop
    super(props);
    this.state = {
      searchString: ''
    };
  }

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
          <TextInput
            ref="place"
            style={styles.searchBox}
            placeholder="Search"
            underlineColorAndroid="transparent"
            value={this.state.searchString}
            // initial setup for search feature
            onChangeText={searchString => this.setState({ searchString })}
          />
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
    justifyContent: 'space-around',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: StatusBar.currentHeight,
    elevation: 4
  },
  searchBar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 2,
    elevation: 4
  },
  searchBox: {
    flex: 1,
    height: 48,
    fontSize: 20,
    paddingLeft: 20,
    color: '#424242'
  },
  title: {
    color: 'white',
    fontSize: 24
  }
});
