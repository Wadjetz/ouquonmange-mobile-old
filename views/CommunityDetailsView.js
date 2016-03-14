"use strict";

import React, {
  Text,
  View,
  StyleSheet
} from "react-native";

const CommunityDetailsView = React.createClass({
  render() {
    const { community } = this.props;

    return (
      <View style={styles.mainContainer}>
        <Text>{community.name}</Text>
        <Text>{community.description}</Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 70,
    flex: 1
  }
});

export default CommunityDetailsView;
