"use strict";

import { ListView } from "react-native";

import {
  ON_LOADING,
  ON_LOAD_COMMUNITIES,
  ON_SHOW_CREATE_COMMUNITY
} from "../actions/CommunitiesActions";

const initState = {
  communities: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
  loading: false,
  showCreateCommunity: false
};

const CommunitiesReducer = (state = initState, action) => {
  // console.debug("CommunitiesReducer", state, action);
  switch (action.type) {

  case ON_SHOW_CREATE_COMMUNITY:
    return Object.assign({}, state, {
      showCreateCommunity: action.value
    });

  case ON_LOAD_COMMUNITIES:
    return Object.assign({}, state, {
      communities: action.communities
    });

  case ON_LOADING:
    return Object.assign({}, state, {
      loading: action.isLoading
    });

  default: return state;
  }
};

export default CommunitiesReducer;
