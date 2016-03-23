"use strict";

import React, {
  View,
  StyleSheet,
  ListView
} from "react-native";

import CommunityCell from "../components/CommunityCell";

const CommunitiesList = React.createClass({
  render() {
    return (
      <ListView
        dataSource={this.props.communities}
        renderRow={this.renderRow}
        renderSeparator={this.renderSeparator}
        automaticallyAdjustContentInsets={false}
        keyboardDismissMode="on-drag"
      />
    );
  },

  selectCommunity(community) {
    this.props.navigator.push({
      index: "community_details",
      title: "Community Details",
      passProps: {
        community: community
      }
    });
  },

  renderRow(community, sectionID, rowID, highlightRowFunction) {
    return (
      <CommunityCell
        community={community}
        onSelect={() => this.selectCommunity(community)}
        onHighlight={() => highlightRowFunction(sectionID, rowID)}
        onDeHighlight={() => highlightRowFunction(null, null)}
      />
    );
  },

  renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return <View
      key={`SEP_${sectionID}_${rowID}`}
      style={[styles.rowSeparator, adjacentRowHighlighted && styles.rowSeparatorHighlighted]}
    />;
  }
});

const styles = StyleSheet.create({
  rowSeparator: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    height: 1,
    marginLeft: 4
  },
  rowSeparatorHighlighted: {
    opacity: 0.0
  }
});

export default CommunitiesList;
