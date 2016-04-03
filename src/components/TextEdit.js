"use strict";

import React, {
  View,
  Text,
  StyleSheet,
  TextInput
} from "react-native";

const TextEdit = React.createClass({
  render() {

    const { label, error } = this.props;

    return (
      <View style={styles.form}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          {...this.props}
          autoCorrect={false}
          returnKeyType="next"
          style={(error) ? [styles.input, styles.inputError] : [styles.input]}
        />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  form: {
    paddingTop: 15,
    paddingBottom: 15
  },
  inputError: {
    borderColor: "#E55934"
  },
  label: {
    fontSize: 16,
    marginBottom: 5
  },
  input: {
    fontSize: 15,
    borderColor: "#000",
    borderWidth: 1,
    height: 45,
    padding: 5
  }
});

export default TextEdit;
