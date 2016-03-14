"use strict";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  content: {
    flex: 1,
    backgroundColor: "#F7EEBB"
  },
  rowSeparator: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    height: 1,
    marginLeft: 4
  },
  rowSeparatorHighlighted: {
    opacity: 0.0
  },
  emptyList: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center"
  },
  emptyListText: {
    marginTop: 80,
    color: "#999"
  }
});
