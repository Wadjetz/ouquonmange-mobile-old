"use strict";

import React, {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} from "react-native";

const CommunityCell = React.createClass({
  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={this.props.onSelect}
          onShowUnderlay={this.props.onHighlight}
          onHideUnderlay={this.props.onDeHighlight}
        >
        <View style={styles.cellContainer}>
          <Image
            source={{
              uri: this.props.community.artworkUrl100
            }}
            style={styles.cellImage}
          />
          <View style={styles.cellTextContainer}>
            <Text style={styles.communityName} numberOfLines={1}>
              {this.props.community.name}
            </Text>
            <Text style={styles.communityDescription} numberOfLines={2}>
              {this.props.community.name}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
    );
  }
});

const styles = StyleSheet.create({
  cellContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 4
  },
  cellImage: {
    height: 80,
    width: 60,
    marginRight: 8,
    resizeMode: "contain"
  },
  cellTextContainer: {
    flex: 1
  },
  communityName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4

  },
  communityDescription: {
    fontSize: 12,
    color: "#999",
    flex: 1
  }
});

export default CommunityCell;
