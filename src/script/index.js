import './../pages/index.css';

import { validationCriteria, profileButtonEdit, profileButtonAdd,
  editionPopupForm, additionPopupForm, popupWithAvatarSelector, popupWithPictureSelector,
  popupWithEditFormSelector, popupWithAddFormSelector, profileSelector, userDataSelector,
  cardPlaceSelector, apiSettings, profileAvatarButton, avatarPopupForm, popupWithConfirmSelector } from './constants.js';

import { validateForm } from './utils.js';

import PopupWithConfirmation from './components/PopupWithConfirmation.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import Section from './components/Section.js';
import Card from './components/Card.js'
import Api from './components/Api.js'
import { get } from 'lodash';

const popupWithImage = new PopupWithImage(popupWithPictureSelector);

//Спасибо за оперативную оценку моей работы и полезные комментарии!

popupWithImage.setEventListeners();

const userInfo = new UserInfo(profileSelector, userDataSelector);

const formForEdit = new PopupWithForm({
  submitForm: (item) => {
    formForEdit.renderLoading(true);
    api.setUserData(item)
      .then((data) => {
        formForEdit.close()
        userInfo.setUserData(item);
      })
      .catch(err => console.log('Неудача при обновление данных', err))
      .finally(() => formForEdit.renderLoading(false))
  }
},
popupWithEditFormSelector);

formForEdit.setEventListeners();

const formForAdd = new PopupWithForm({
  submitForm: (item) => {
    formForAdd.renderLoading(true);
    api.setNewCard(item)
      .then(data => {
        cardList.prependItem(createCard(data));
        formForAdd.close();
      })
      .catch(err => console.log('Неудача при добавлении фоточки', err))
      .finally(() => {
        formForAdd.renderLoading(false);
      })
  }
},
popupWithAddFormSelector)

formForAdd.setEventListeners();

const formToRemove = new PopupWithConfirmation(popupWithConfirmSelector)

formToRemove.setEventListeners();

const formForAvatar = new PopupWithForm({
  submitForm: (item) => {
    formForAvatar.renderLoading(true);
    api.setUserAvatar(item)
      .then((data) => {
        userInfo.setUserAvatar(data);
        formForAvatar.close();
      })
      .catch(err => console.log('Неудача при обновление аватара', err))
      .finally(() => {
        formForAvatar.renderLoading(false);
      })
  }
}, popupWithAvatarSelector)

formForAvatar.setEventListeners();

validateForm(validationCriteria, editionPopupForm);

validateForm(validationCriteria, additionPopupForm);

validateForm(validationCriteria, avatarPopupForm);

const api = new Api(apiSettings);

const cardList = new Section({
  renderer: (item) => {
    const cardElement = createCard(item);
    cardList.appendItem(cardElement);
  }
},
cardPlaceSelector);

profileButtonEdit.addEventListener('click', () => {
  formForEdit.open(userInfo.getUserData());
});

profileButtonAdd.addEventListener('click', () => {
  formForAdd.open();
})

profileAvatarButton.addEventListener('click', () => {
  formForAvatar.open();
})

function createCard(item) {
  const card = new Card({
    item: item,
    handleCardClick: (name, link) => {
      popupWithImage.open(name, link);
    },
    handleLikeButton: () => handleLikeButton(card),
    handleRemoveButton: () => handleRemoveButton(card)
  }, userInfo.getUserData().userId);
  const cardElement = card.generateCard();
  return cardElement;
}

function handleLikeButton(card) {
  if (card.checkLikeStatus()) {
    api.dislikeCard(card.getCardId())
      .then(data => {
        card.countLikes(data.likes);
        card.dislike();
      })
      .catch((err) => console.log('Неудача приключилась при изменении отношения', err.message))
  } else {
    api.likeCard(card.getCardId())
      .then(data => {
        card.countLikes(data.likes);
        card.like();
      })
      .catch((err) => console.log('Неудача приключилась при одобрении', err))
  }
}

function handleRemoveButton(card) {
  formToRemove.open();
  formToRemove.handleSubmit(() => {
    formToRemove.renderLoading(true)
    api.removeCard(card.getCardId())
    .then((data) => {
      card.removeCard();
      formToRemove.close();
    })
    .catch(err => console.log('Неудача при удалении', err))
    .finally(() => {
      formToRemove.renderLoading(false);
    })
  })
}

Promise.all([
  api.getUserData(),
  api.getInitialCards()
])
  .then(([ userData, initialCards ]) => {
    userInfo.setUserData(userData);
    userInfo.setUserAvatar(userData);
    userInfo.setUserId(userData);
    cardList.renderItems(initialCards);
  })
  .catch((err) => console.log(err))
