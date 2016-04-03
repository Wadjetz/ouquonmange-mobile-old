"use strict";

import React, {
} from "react-native";

import SignUpView from "../views/SignUpView";
import LoginView from "../views/LoginView";
import CommunitiesView from "../views/CommunitiesView";
import CommunityDetailsView from "../views/CommunityDetailsView";

export default function SceneRender(route, navigator) {
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
