"use strict";

import { getJwtToken } from "./persistance";

// const API_URL = "http://ouquonmange.berezovskiy.fr";
// const API_URL = "http://localhost:9000";
const API_URL = "http://192.168.99.100:9000";

let token;

function getToken() {
  return new Promise(function(resolve, reject) {
    if (token) {
      resolve(token);
    } else {
      getJwtToken()
        .then(jwtToken => {
          token = jwtToken;
          resolve(jwtToken);
        })
        .catch(error => reject(error));
    }
  });
}

function jsonSuccess(response) {
  return new Promise(function(resolve, reject) {
    if (response.status >= 200 && response.status < 300) {
      response
        .json()
        .then(json => resolve(json))
        .catch(error => reject(error));
    } else {
      response
        .json()
        .then(json => reject(json))
        .catch(error => reject(error));
    }
  });
}

export function login(credentials) {
  return fetch(`${API_URL}/auth/local/login`, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  .then(jsonSuccess);
}

export function signup(newUser) {
  return fetch(`${API_URL}/auth/local/signup`, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  .then(jsonSuccess);
}

export function communityList(token) {
  // TODO getToken
  return fetch(`${API_URL}/api/community`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
  .then(jsonSuccess);
}

export function communitySearch(query) {
  const url = `${API_URL}/api/community/search${(query)?"?query="+encodeURIComponent(query):""}`;
  // console.debug("API.communitySearch", url);
  return getToken().then(token => {
    return fetch(url, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(jsonSuccess);
  });
}
