"use strict";

import React, {
  PropTypes,
  Navigator,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const { oneOfType, element, arrayOf } = PropTypes;

const Navigation = React.createClass({

  propTypes: {
    children: oneOfType([
      element,
      arrayOf(element)
    ]).isRequired
  },

  render() {
    const { children } = this.props;

    let initialRoute = Array.isArray(children) ? children.find(r => r.props.init === true) : children;
    if (! initialRoute) {
      initialRoute = children[0];
    }

    return (
      <Navigator
        renderScene={(route, navigator) => {
          const { index, passProps } = route;
          const routes = Array.isArray(children) ? children : [children];
          const Scene = routes.find(r => r.props.index === index).props.component;
          return <Scene {...passProps} navigator={navigator} />;
        }}
        initialRoute={{
          index: initialRoute.props.index,
          title: initialRoute.props.title
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: LeftButton,
              RightButton: RightButton,
              Title: Title
            }}
            style={styles.navBar}
          />
        }
      />
    );
  }
});

function LeftButton(route, navigator, index) {
  if (index === 0) {
    return null;
  }
  return (
    <TouchableOpacity
      onPress={() => navigator.pop()}
      style={styles.leftButton}>
      <Text style={[styles.navBarText, styles.navBarButtonText]}>
        <Icon name="chevron-left" size={20} color="#FFF" />
      </Text>
    </TouchableOpacity>
  );
}

function Title(route) {
  return (
    <Text style={styles.title}>
      {route.title}
    </Text>
  );
}

function RightButton(route, navigator, index) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigator.push({
          index: "login",
          title: "Login " + index
        });
      }}
      style={styles.rightButton}>
      <Text style={[styles.navBarText, styles.navBarButtonText]}>
        Inscription
      </Text>
    </TouchableOpacity>
  );
}

var styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#283593",
    height: 50
  },
  title: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 18
  },
  rightButton: {
    marginVertical: 14,
    marginLeft: 20
  },

  leftButton: {
    marginVertical: 16,
    paddingRight: 10
  },
  navBarText: {
    fontSize: 16
  },
  navBarButtonText: {
    color: "#FFF"
  }
});

export default Navigation;
