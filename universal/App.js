"use strict";

import React, {
  Component,
  Text,
  View
} from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";

import RootReducer from "./reducers/RootReducer";

export default class App extends Component {

  render () {
    return (
      <Provider store={createStore(RootReducer)}>
        <View>
          <Text>Hello World</Text>
        </View>
      </Provider>
    );
  }

}
