"use strict";

import React, {
  PropTypes,
  View,
  Text
} from "react-native";

const {
  string,
  bool,
  func
} = PropTypes;

const Route = React.createClass({

  propTypes: {
    index: string.isRequired,
    title: string.isRequired,
    component: func.isRequired,
    init: bool
  },

  render() {
    return (
      <View>
        <Text>Route</Text>
      </View>
    );
  }
});

export default Route;
