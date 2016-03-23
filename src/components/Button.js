"use strict";

import React, {
  StyleSheet,
  Text,
  TouchableHighlight
} from "react-native";

const Button = React.createClass({
  render() {

    const { text, onPress } = this.props;

    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#3F51B5"
        onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableHighlight>
    );
  }
});

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#303F9F",
    marginTop: 15,
    padding: 12
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "500",
    textAlign: "center",
    color: "#FFF"
  }
});

export default Button;
