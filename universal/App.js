"use strict";

import React, {
  Component,
  Text,
  View,
  StyleSheet
} from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";

import RootReducer from "./reducers/RootReducer";
import Navigation from "./navbar/Navigation";
import Route from "./navbar/Route";

class Test extends Component {
  render() {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }
}

export default class App extends Component {

  render () {

    console.log("StyleSheet", StyleSheet);
    return (
      <Provider store={createStore(RootReducer)}>
        <Navigation>
          <Route index="login" title="Login" component={Test} />
          <Route index="test" title="Test" component={Test} />
        </Navigation>
      </Provider>
    );
  }

}
