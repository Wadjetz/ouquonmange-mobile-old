"use strict";

export const ON_SHOW_CREATE_COMMUNITY = "ON_SHOW_CREATE_COMMUNITY";

export function onShowCreateCommunity(show) {
  return {
    type: ON_SHOW_CREATE_COMMUNITY,
    value: show
  };
}

export const ON_LOAD_COMMUNITIES = "ON_LOAD_COMMUNITIES";

export function onLoadCommunities(communities) {
  // console.debug("CommunitiesActions.onLoadCommunities communities=", communities);
  return {
    type: ON_LOAD_COMMUNITIES,
    communities: communities
  };
}

export const ON_LOADING = "ON_LOADING";

export function onLoading(isLoading) {
  return {
    type: ON_LOADING,
    isLoading: isLoading
  };
}
