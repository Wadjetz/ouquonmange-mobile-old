"use strict";

const initState = {

};

const AppReducer = (state = initState, action) => {
  console.log("AppReducer", state, action);
  switch (action.type) {
    default: return state;
  }
};

export default AppReducer;
