import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { debounce } from 'lodash';
import { Icon } from 'react-native-elements';

var dataset = require('../locationCodes.json');

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    };
    this.handleChange = debounce(this.handleChange, 300);
  }

  handleChange = searchString => {
    searchString = searchString.toLowerCase();

    if (searchString == '' || searchString.length < 2) {
      this.setState({ searchResults: [] });
    } else {
      let searchResults = [];
      for (let data in dataset) {
        if (data.toLowerCase().indexOf(searchString) != -1) {
          searchResults.push([data, dataset[data].type]);
        }
      }
      this.setState({ searchResults });
    }
  };

  componentDidMount() {
    this.refs.search.focus();
  }

  render() {
    const searchResults = this.state.searchResults.slice(0, 5);
    const renderResults = () => {
      return searchResults.map((result, index) => {
        return (
          <View key={index} style={styles.searchResult}>
            <Text style={styles.searchResultLocation}>{result[0]}</Text>
            <Text style={styles.searchResultType}>{result[1]}</Text>
          </View>
        );
      });
    };
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <View style={styles.searchBar}>
            <Icon
              name="arrow-back"
              color="gray"
              underlayColor="white"
              style={{ paddingLeft: 15, justifyContent: 'center' }}
              onPress={() => this.props.navigation.goBack()}
            />
            <TextInput
              ref="search"
              style={styles.searchBox}
              underlineColorAndroid="transparent"
              placeholder="Search Eg: Kathmandu"
              value={this.state.searchString}
              onChangeText={string => this.handleChange(string)}
            />
          </View>
        </View>
        {renderResults()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    height: 70 + StatusBar.currentHeight,
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
  searchBox: {
    fontSize: 20,
    paddingLeft: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    flex: 1
  },
  searchResult: {
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 2
  },
  searchResultLocation: {
    fontSize: 20
  },
  searchResultType: {
    fontSize: 20,
    color: 'grey'
  }
});
