"use strict";

import React, {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicatorIOS
} from "react-native";
import validate from "validate.js";
import { signup } from "../services/ouquonmange-api";
import { realm } from "../services/persistance";
import TextEdit from "../components/TextEdit";
import Panel from "../components/Panel";
import Button from "../components/Button";

const SignUpView = React.createClass({

  getInitialState() {
    return {
      username: "",
      email: "",
      password: "",
      isLoading: false,
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

  signup() {
    const { username, email, password } = this.state;

    validate.async({
      username: username,
      email: email,
      password: password
    }, {
      username: { presence: { message: "Haha tes null"}},
      email: { presence: { message: "Haha tes null"}},
      password: { presence: { message: "Haha tes null"}}
    }).then(newUser => {
      signup(newUser)
        .then(response => {
          console.log("signup.login.response", response);
          realm.write(() => {
            realm.create("Auth", {
              jwt_token: response.token
            });
            this.props.navigator.resetTo({
              index: "communities",
              title: "Communities",
              passProps: {
                token: response.token
              }
            });
          });
        })
        .catch(error => {
          console.log("signup.error", error.message);
          this.setState({
            errors: error,
            isLoading: false
          });
        });
    }).catch(errors => {
      console.log("signup.validate.error", errors);
      this.setState({
        errors: errors,
        isLoading: false
      });
    });
  },

  render() {
    return (
      <Panel>
        <View>
          <TextEdit
            label="Username"
            value={this.state.username}
            onChange={this.onChangeField("username")}
            error={this.state.errors.username}
            autoCapitalize="none"
            returnKeyType="next"
            autoCorrect={false}
          />
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
            error={this.state.errors.password}
            returnKeyType="next"
            secureTextEntry={true}
          />
          <View>
            <Button text="Sign Up" onPress={this.signup} />
          </View>
        </View>
        <View style={{alignItems: "center"}}>
          <ActivityIndicatorIOS
            animating={this.state.isLoading}
            style={styles.spinner}
          />
        </View>
      </Panel>
    );
  }
});

const styles = StyleSheet.create({
});

export default SignUpView;
