"use strict";

import React, {
  Component,
  Text,
  StyleSheet
} from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";

import RootReducer from "./reducers/RootReducer";
import Navigation from "./navbar/Navigation";
import Route from "./navbar/Route";
import Scene from "./navbar/Scene";

class Test extends Component {
  render() {
    return (
      <Scene>
        <Text>Login</Text>
      </Scene>
    );
  }
}

export default class App extends Component {

  render () {

    console.log("StyleSheet", StyleSheet);
    return (
      <Provider store={createStore(RootReducer)}>
        <Navigation>
          <Route index="login" title="Login" component={Test} rightButton={"rightButton"} />
          <Route index="test" title="Test" component={Test} />
        </Navigation>
      </Provider>
    );
  }

}
