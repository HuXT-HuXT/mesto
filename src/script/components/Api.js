export default class Api {
  constructor(apiSettings) {
    this._baseUrl = apiSettings.baseUrl;
    this._header = apiSettings.headers
  }

  getUserData() {
     return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._header
     })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка при загрузке профиля: ${res.status}`)
    })
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
  }

  setUserAvatar(item) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._header,
      body: JSON.stringify({
        avatar: `${item.link}`
      })
     })
     .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка при обновлении аватара: ${res.status}`);
    })
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._header
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка при загрузке карточек: ${res.status}`);
    })
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
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка при добавлении карточки: ${res.status}`);
    })
  }

  removeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._header
     })
     .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка при удалении карточки: ${res.status}`);
    })
  }

  likeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._header
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка при одобрении карточки: ${res.status}`);
    })
  }

  dislikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._header
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка при охлаждении к карточке: ${res.status}`);
    })
  }

}
