"use strict";

import React, {
  Text,
  View,
  ListView
} from "react-native";
import styles from "../styles/styles";
import SearchBar from "../components/SearchBar";
import TimerMixin from "react-timer-mixin";
import CommunitiesList from "../components/CommunitiesList";
import { communitySearch } from "../services/ouquonmange-api";
import { getJwtToken } from "../services/persistance";

let LOADING = {};

let resultsCache = {
  dataForQuery: {}
};

var CommunitiesView = React.createClass({
  mixins: [TimerMixin],

  timeoutID: null,

  getInitialState() {
    return {
      isLoading: true,
      query: "",
      token: "",
      resultData: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
  },

  componentWillMount() {
    console.log("CommunitiesView.componentWillMount", this.props);

    const { navigator } = this.props;

    getJwtToken().then(jwt_token => {
      if (jwt_token) {
        communitySearch(jwt_token)
          .catch(error => {
            console.log("communitySearch.error", error);
            this.setState({
              isLoading: false,
              token: jwt_token
            });
            navigator.resetTo({
              index: "login",
              title: "Login"
            });
          })
          .then(response => {
            console.log("communityList", response);
            this.setState({
              isLoading: false,
              resultData: this.getDataSource(response),
              token: jwt_token
            });
          });
      } else {
        navigator.resetTo({
          index: "login",
          title: "Login"
        });
      }
    }).catch(error => {
      console.log(error);
      navigator.resetTo({
        index: "login",
        title: "Login"
      });
    });
  },

  render() {
    let content = null;
    if (this.state.resultData.getRowCount() !== 0) {
      content = <CommunitiesList navigator={this.props.navigator} communities={this.state.resultData} />;
    } else {
      let text = "";
      if (!this.state.isLoading && this.state.query) {
        text = `No Communities found for ${this.state.query}`;
      } else if (!this.state.isLoading) {
        text = "No Communities found";
      }
      content = <View style={styles.emptyList}>
        <Text style={styles.emptyListText}>{text}</Text>
      </View>;
    }

    return (
      <View style={styles.mainContainer}>
        <SearchBar
          onSearch={e => {
            var query = e.nativeEvent.text;
            this.clearTimeout(this.timeoutID);
            this.timeoutID = this.setTimeout(() => this.searchCommunities(query), 250);
          }}
          isLoading={this.state.isLoading}
        />
        <View
          style={[styles.separator, {
            marginLeft: 0
          }]}
        />
        {content}
      </View>
    );
  },

  getDataSource(items) {
    return this.state.resultData.cloneWithRows(items);
  },

  searchCommunities(query) {
    this.timeoutID = null;

    this.setState({
      query: query
    });

    var cachedResultsForQuery = resultsCache.dataForQuery[query];

    if (cachedResultsForQuery) {
      if (!LOADING[query]) {
        this.setState({
          isLoading: false,
          resultData: this.getDataSource(cachedResultsForQuery)
        });
      } else {
        this.setState({
          isLoading: true
        });
      }
    } else {
      this.setState({
        isLoading: true,
        resultData: this.getDataSource([])
      });

      LOADING[query] = true;
      resultsCache.dataForQuery[query] = null;
      console.log("CommunitiesView.search", this.props);
      communitySearch(this.props.token || this.state.token, query)
        .then(response => {
          LOADING["query"] = false;
          this.setState({
            isLoading: false,
            resultData: this.getDataSource(response)
          });
        })
        .catch(error => {
          console.log(error);
          LOADING[query] = false;
          resultsCache.dataForQuery[query] = undefined;
          this.setState({
            isLoading: false
          });
        });
    }
  }
});

export default CommunitiesView;
