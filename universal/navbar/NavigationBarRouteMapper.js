"use strict";

import React, {
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";


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
  RightButton(route/*, navigator, index, navState*/) {
    return (
      <TouchableOpacity
        onPress={(e) => {
          console.log(e);
        }}
        style={styles.navBarRightButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          Inscription
        </Text>
      </TouchableOpacity>
    );
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
