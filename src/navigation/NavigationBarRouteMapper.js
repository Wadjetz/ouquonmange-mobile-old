"use strict";

import React, {
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import { deleteJwtToken } from "../services/persistance";

const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index/*, navState*/) {

    if (index === 0) {
      return null;
    }

    // var previousRoute = navState.routeStack[index - 1];
    // {previousRoute.title}
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          <Icon name="chevron-left" size={15} color="#FFF" />
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator/*, index, navState*/) {
    if (route.index === "login") {
      return (
        <TouchableOpacity
          onPress={() => {
            navigator.push({
              index: "signup",
              title: "SignUp"
            });
          }}
          style={styles.navBarRightButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText]}>
            Inscription
          </Text>
        </TouchableOpacity>
      );
    } else if (route.index === "communities") {
      return (
        <TouchableOpacity
          onPress={() => {
            deleteJwtToken(() => {
              navigator.resetTo({
                index: "login",
                title: "Login"
              });
            });
          }}
          style={styles.navBarRightButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText]}>
            Logout
          </Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }

  },
  Title(route/*, navigator, index, navState*/) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    );
  }
};

var styles = StyleSheet.create({
  navBarText: {
    fontSize: 16,
    marginVertical: 10
  },
  navBarTitleText: {
    color: "#FFF",
    fontWeight: "500",
    marginVertical: 9
  },
  navBarLeftButton: {
    paddingLeft: 10
  },
  navBarRightButton: {
    paddingRight: 10
  },
  navBarButtonText: {
    color: "#FFF"
  }
});

export default NavigationBarRouteMapper;
