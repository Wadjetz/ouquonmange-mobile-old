"use strict";

import React, {
  Text,
  View
} from "react-native";
import TimerMixin from "react-timer-mixin";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  onLoadCommunities,
  onLoading,
  onShowCreateCommunity
} from "../actions/CommunitiesActions";
import styles from "../styles/styles";
import SearchBar from "../components/SearchBar";
import CommunitiesList from "../components/CommunitiesList";
import CreateCommunity from "../components/CreateCommunity";
import { communitySearch } from "../services/ouquonmange-api";

import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";


var CommunitiesView = React.createClass({
  mixins: [TimerMixin],

  timeoutID: null,

  componentWillMount() {
    const { navigator } = this.props;
    this.props.onLoading(true);
    communitySearch().then(response => {
      console.log("CommunitiesView.componentWillMount response=", response);
      this.props.onLoadCommunities(this.props.communities.cloneWithRows(response));
      this.props.onLoading(false);
    }).catch(error => {
      console.log("CommunitiesView.componentWillMount error=", error);
      this.props.onLoading(false);
      navigator.resetTo({
        index: "login",
        title: "Login"
      });
    });
  },

  render() {
    console.log("CommunitiesView.render", this.props);
    let content = null;
    if (this.props.communities.getRowCount() !== 0) {
      content = <CommunitiesList navigator={this.props.navigator} communities={this.props.communities} />;
    } else {
      let text = (!this.props.loading) ? "No Communities found" : "";
      content = <View style={styles.emptyList}>
        <Text style={styles.emptyListText}>{text}</Text>
      </View>;
    }

    return (
      <View style={styles.mainContainer}>
        <CreateCommunity {...this.props} />
        <SearchBar
          onSearch={e => {
            var query = e.nativeEvent.text;
            this.clearTimeout(this.timeoutID);
            this.timeoutID = this.setTimeout(() => this.searchCommunities(query), 250);
          }}
          isLoading={this.props.loading}
        />
        <View
          style={[styles.separator, {
            marginLeft: 0
          }]}
        />
        {content}
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="android-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="android-notifications-none" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Icon name="android-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  },

  searchCommunities(query) {
    this.timeoutID = null;
    this.props.onLoading(true);
    communitySearch(query).then(response => {
      console.log("CommunitiesView.searchCommunities", response, this.props);
      this.props.onLoadCommunities(this.props.communities.cloneWithRows(response));
      this.props.onLoading(false);
    }).catch(error => {
      console.log("CommunitiesView.searchCommunities.error", error);
      this.props.onLoading(false);
    });
  }
});

function mapStateToProps(state) {
  return {
    communities: state.communitiesState.communities,
    loading: state.communitiesState.loading,
    showCreateCommunity: state.communitiesState.showCreateCommunity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onLoadCommunities: onLoadCommunities,
    onLoading: onLoading,
    onShowCreateCommunity: onShowCreateCommunity
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunitiesView);
