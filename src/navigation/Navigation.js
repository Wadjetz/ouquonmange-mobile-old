"use strict";

import React, {
  StyleSheet,
  Navigator
} from "react-native";

import SignUpView from "../views/SignUpView";
import LoginView from "../views/LoginView";
import CommunitiesView from "../views/CommunitiesView";
import CommunityDetailsView from "../views/CommunityDetailsView";

import NavigationBarRouteMapper from "./NavigationBarRouteMapper";

const Navigation = React.createClass({
  render() {
    return (
      <Navigator
        renderScene={this.renderScene}
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
  },

  renderScene(route, navigator) {
    //console.log("Navigation.renderScene", route);

    const { index, passProps } = route;

    switch (index) {
      case "login":
        return <LoginView {...passProps} navigator={navigator} />;
      case "signup":
        return <SignUpView {...passProps} navigator={navigator} />;
      case "communities":
        return <CommunitiesView {...passProps} navigator={navigator} />;
      case "community_details":
        return <CommunityDetailsView {...passProps} navigator={navigator} />;
    }
  }
});

var styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#283593"
  }
});

export default Navigation;
