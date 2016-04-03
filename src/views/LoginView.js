"use strict";

import validate from "validate.js";
import React, {
  Text,
  View,
  StyleSheet,
  ActivityIndicatorIOS
} from "react-native";

import { login } from "../services/ouquonmange-api";
import { realm } from "../services/persistance";
import TextEdit from "../components/TextEdit";
import Panel from "../components/Panel";
import Button from "../components/Button";

const LoginView = React.createClass({

  getInitialState() {
    return {
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

  render() {
    return (
      <Panel>
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
            <Button text="Login" onPress={this.login} />
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
      </Panel>
    );
  },

  login() {
    const { navigator } = this.props;

    this.setState({
      isLoading: true
    });

    validate.async({
      email: this.state.email,
      password: this.state.password
    }, {
      email: { presence: { message: "Haha tes null"}},
      password: { presence: { message: "Haha tes null"}}
    }).then(credentials => {
      login(credentials)
        .then(response => {
          console.log("LoginView.login.response", response);
          realm.write(() => {
            realm.create("Auth", {
              jwt_token: response.token
            });
            navigator.resetTo({
              index: "communities",
              title: "Communities",
              passProps: {
                token: response.token
              }
            });
          });
        })
        .catch(errors => {
          console.log("LoginView.login.errors", errors);
          this.setState({
            errors: errors,
            isLoading: false
          });
        });
    }).catch(errors => {
      console.log("LoginView.login.validate.errors", errors);
      this.setState({
        errors: errors,
        isLoading: false
      });
    });
  }
});

const styles = StyleSheet.create({
  content: {
    //flex: 1
  },
  spinner: {
    width: 30
  }
});

export default LoginView;
