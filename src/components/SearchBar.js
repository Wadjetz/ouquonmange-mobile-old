"use strict";

import React, {
  TextInput,
  StyleSheet,
  View,
  ActivityIndicatorIOS
} from "react-native";

var SearchBar = React.createClass({
  render() {
    return (
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchBarInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search"
          returnKeyType="search"
          enablesReturnKeyAutomatically={true}
          onChange={this.props.onSearch}
        />
        <ActivityIndicatorIOS
          animating={this.props.isLoading}
          style={styles.spinner}
        />
      </View>
    );
  }
});

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 64,
    padding: 3,
    paddingLeft: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEEEEE"
  },
  searchBarInput: {
    fontSize: 15,
    flex: 1,
    height: 30
  },
  spinner: {
    width: 30
  }
});
