"use strict";

import React, {
  View,
  Modal,
  StyleSheet
} from "react-native";

import Button from "react-native-button";

const _Modal = React.createClass({
  render() {
    console.log(this.props);
    return (
      <Modal animated={true} transparent={true} visible={this.props.showCreateCommunity}>
        <View style={styles.container}>
          <Button onPress={() => {
            this.props.onShowCreateCommunity(false);
          }}>
            Close
          </Button>
          {this.props.children}
        </View>
      </Modal>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    marginTop: 20,
    padding: 10,
    flex: 1
  }
});

export default _Modal;
