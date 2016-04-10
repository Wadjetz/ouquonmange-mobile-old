"use strict";

import { combineReducers } from "redux";

import AppReducer from "./AppReducer";

const RootReducer = combineReducers({
  appState: AppReducer
});

export default RootReducer;
