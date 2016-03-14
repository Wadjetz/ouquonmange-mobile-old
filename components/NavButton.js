"use strict";

import React, {
  StyleSheet,
  Text,
  TouchableHighlight
} from "react-native";

const NavButton = React.createClass({
  render() {

    const { text, onPress } = this.props;

    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableHighlight>
    );
  }
});

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#CDCDCD"
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "500"
  }
});

export default NavButton;
