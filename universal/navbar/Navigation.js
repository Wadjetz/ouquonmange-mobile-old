"use strict";

import React, {
  PropTypes,
  Navigator
} from "react-native";

const {
  oneOfType,
  element,
  arrayOf
} = PropTypes;

import NavigationBarRouteMapper from "./NavigationBarRouteMapper";

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
            routeMapper={NavigationBarRouteMapper}
          />
        }
      />
    );
  }
});

export default Navigation;
