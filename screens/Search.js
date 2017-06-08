import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { debounce } from 'lodash';

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
        <View style={styles.searchBar}>
          <TextInput
            ref="search"
            style={styles.searchBox}
            underlineColorAndroid="transparent"
            placeholder="Search Eg: Kathmandu"
            value={this.state.searchString}
            onChangeText={string => this.handleChange(string)}
          />
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
  searchBar: {
    height: 90,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'red',
    elevation: 4,
    justifyContent: 'center'
  },
  searchBox: {
    fontSize: 18,
    paddingLeft: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    elevation: 4,
    marginLeft: 10,
    marginRight: 10,
    height: 48
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
