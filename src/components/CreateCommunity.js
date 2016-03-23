"use strict";

import React, {
  View,
  Text,
  StyleSheet,
  ActivityIndicatorIOS
} from "react-native";
import Modal from "./Modal";
import Button from "react-native-button";
import TextEdit from "../components/TextEdit";

const CreateCommunity = React.createClass({

  getInitialState() {
    return {
      email: "",
      password: "",
      errors: {}
    };
  },

  onChangeField(field) {
    return (e) => {
      var value = e.nativeEvent.text;
      this.setState({
        [field]: value
      });
    };
  },

  create() {

  },

  render() {
    console.log(this.props);
    return (
      <Modal {...this.props} visible={this.props.showCreateCommunity}>
        <View style={styles.container}>
          <Text>CreateCommunity</Text>
          <View>
            <TextEdit
              label="Email"
              value={this.state.email}
              onChange={this.onChangeField("email")}
              error={this.state.errors.email}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="me@exemple.com"
              returnKeyType="next"
              keyboardType="email-address"
            />
            <TextEdit
              label="Password"
              value={this.state.password}
              onChange={this.onChangeField("password")}
              returnKeyType="next"
              secureTextEntry={true}
              error={this.state.errors.password}
            />
            <View>
              <Button text="Login" onPress={this.create} />
            </View>
            <View>
              {(this.state.errors.error) ? <Text style={{textAlign: "center"}}>{this.state.errors.error}</Text> : undefined}
            </View>
            <View style={{alignItems: "center"}}>
              <ActivityIndicatorIOS
                animating={this.state.isLoading}
                style={styles.spinner}
              />
            </View>
          </View>
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

export default CreateCommunity;
