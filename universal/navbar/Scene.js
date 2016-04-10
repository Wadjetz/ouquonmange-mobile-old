"use strict";

import React, {
  Component,
  View,
  StyleSheet
} from "react-native";

export default class Scene extends Component {
  render() {
    return (
      <View style={styles.scene}>
        {this.props.children}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  scene: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingTop: 5,
    marginTop: 50,
    flex: 1
  }
});
