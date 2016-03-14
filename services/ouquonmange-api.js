"use strict";

//const API_URL = "http://ouquonmange.berezovskiy.fr";
const API_URL = "http://localhost:9000";

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

export function communitySearch(token, query) {
  const url = `${API_URL}/api/community/search${(query)?"?query="+encodeURIComponent(query):""}`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
  .then(jsonSuccess);
}
