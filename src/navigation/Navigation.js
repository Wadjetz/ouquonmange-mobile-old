"use strict";

import React, {
  StyleSheet,
  Navigator
} from "react-native";

import NavigationBarRouteMapper from "./NavigationBarRouteMapper";
import SceneRender from "./SceneRender";

const Navigation = React.createClass({
  render() {
    return (
      <Navigator
        renderScene={SceneRender}
        initialRoute={{
          index: "communities",
          title: "Communities"
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
      />
    );
  }
});

var styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#283593"
  }
});

export default Navigation;
