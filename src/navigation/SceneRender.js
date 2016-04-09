"use strict";

import React, {
} from "react-native";

import Routes from "./Routes";

export default function SceneRender(route, navigator) {
  const { index, passProps } = route;
  const Scene = Routes[index].component;
  return <Scene {...passProps} navigator={navigator} />;
}
