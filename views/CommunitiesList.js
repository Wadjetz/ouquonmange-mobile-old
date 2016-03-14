'use strict';

const API_URL = "http://ouquonmange.berezovskiy.fr"

import React, {
  Component,
  Text,
  View,
  AlertIOS
} from 'react-native';
import styles from '../styles/styles';
import SearchBar from '../components/SearchBar';

var CommunitiesList = React.createClass({
  render() {
    return (
      <View style={styles.mainContainer}>

        <SearchBar onSearch={e => {
          var query = e.nativeEvent.text;
          fetch(`${API_URL}`)
            .then((response) => response.text())
            .then(response => {
              AlertIOS.alert(
                'Search', response
              );
            })
            .catch(error => {
              AlertIOS.alert(
                'Search', error
              );
            });
        }} />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiur.
        </Text>
      </View>
    );
  }

});

export default CommunitiesList;
