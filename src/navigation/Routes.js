"use strict";

import SignUpView from "../views/SignUpView";
import LoginView from "../views/LoginView";
import CommunitiesView from "../views/CommunitiesView";
import CommunityDetailsView from "../views/CommunityDetailsView";

const Routes = {
  login: {
    index: "login",
    title: "Login",
    component: LoginView
  },
  signup: {
    index: "signup",
    title: "Signup",
    component: SignUpView
  },
  communities: {
    index: "communities",
    title: "Communities",
    component: CommunitiesView
  },
  community_details: {
    index: "community_details",
    title: "Community Details",
    component: CommunityDetailsView
  }
};

export default Routes;
