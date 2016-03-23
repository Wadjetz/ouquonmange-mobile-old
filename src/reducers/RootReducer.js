"use strict";

import { combineReducers } from "redux";

import CommunitiesReducer from "./CommunitiesReducer";

const RootReducer = combineReducers({
  communitiesState: CommunitiesReducer
});

export default RootReducer;
