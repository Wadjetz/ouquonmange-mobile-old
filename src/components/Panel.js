"use strict";

import React, {
  StyleSheet,
  View
} from "react-native";

const Panel = React.createClass({
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.content}>
          {this.props.children}
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  panel: {
    flex: 1
  },
  content: {
    padding: 15,
    paddingTop: 65,
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#FFF"
  }
});

export default Panel;
