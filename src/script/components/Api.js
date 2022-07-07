export default class Api {
  constructor(apiSettings) {
    this._baseUrl = apiSettings.baseUrl;
    this._header = apiSettings.headers;
  }

  getUserData() {
     return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._header
     })
    .then((res) => this._getResponse(res))
  }

  setUserData(item) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._header,
      body: JSON.stringify({
        name: `${item.name}`,
        about: `${item.about}`
      })
     })
     .then((res) => this._getResponse(res))
  }

  setUserAvatar(item) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._header,
      body: JSON.stringify({
        avatar: `${item.link}`
      })
     })
     .then((res) => this._getResponse(res))
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._header
    })
    .then((res) => this._getResponse(res))
  }

  setNewCard(item) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._header,
      body: JSON.stringify({
        name: item.name,
        link: item.link
      })
    })
    .then((res) => this._getResponse(res))
  }

  removeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._header
     })
     .then((res) => this._getResponse(res))
  }

  likeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._header
    })
    .then((res) => this._getResponse(res))
  }

  dislikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._header
    })
    .then((res) => this._getResponse(res))
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
