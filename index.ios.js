"use strict";

import React, {
  AppRegistry
} from "react-native";

import { Provider } from "react-redux";
import { createStore } from "redux";

import RootReducer from "./src/reducers/RootReducer";

let store = createStore(RootReducer);

import Navigation from "./src/navigation/Navigation";

var OuquonmangeMobile = React.createClass({
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
});

AppRegistry.registerComponent("OuquonmangeMobile", () => OuquonmangeMobile);
