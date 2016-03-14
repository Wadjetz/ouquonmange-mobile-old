/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
"use strict";
import React, {
  AppRegistry
} from "react-native";

import Navigation from "./components/Navigation";

var OuquonmangeMobile = React.createClass({
  render() {
    return (
      <Navigation />
    );
  }
});

AppRegistry.registerComponent("OuquonmangeMobile", () => OuquonmangeMobile);
