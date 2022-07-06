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

const popupWithImage = new PopupWithImage(popupWithPictureSelector);

popupWithImage.setEventListeners();

const userInfo = new UserInfo(profileSelector, userDataSelector);

const formForEdit = new PopupWithForm({
  submitForm: (item) => {
    formForEdit.renderLoading(true);
    api.setUserData(item)
      .catch(err => console.log('Неудача при обновление данных', err))
      .finally(() => formForEdit.renderLoading(false))
    formForEdit.close()
    userInfo.setUserData(item);
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
      })
      .catch(err => console.log('Неудача при добавлении', err))
      .finally(() => formForAdd.renderLoading(false))
    formForAdd.close();
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
      .catch(err => console.log('Неудача при обновление аватара', err))
      .finally(() => formForAvatar.renderLoading(false))
    userInfo.setUserAvatar(item)
    console.log(item);
    formForAvatar.close()
  }
}, popupWithAvatarSelector)

formForAvatar.setEventListeners();

validateForm(validationCriteria, editionPopupForm);

validateForm(validationCriteria, additionPopupForm);

validateForm(validationCriteria, avatarPopupForm);

const api = new Api(apiSettings);

const cardList = new Section({
  items: [],
  renderer: (item) => {
    const cardElement = createCard(item);
    return cardElement;
  }
},
cardPlaceSelector);

api.getInitialCards()
  .then(data => {
    for (let i=0; i < data.length; i++) {
      cardList.appendItem(createCard(data[i]));
    }
  })

api.getUserData()
  .then(data => {
    userInfo.setUserData(data);
    userInfo.setUserAvatar(data);
    userInfo.setUserId(data);
  })

profileButtonEdit.addEventListener('click', () => {
  formForEdit.open(userInfo.getUserData());
});

profileButtonAdd.addEventListener('click', () => {
  formForAdd.open();
})

profileAvatarButton.addEventListener('click', () => {
  formForAvatar.open();
})

api.getInitialCards()
  .then(data => console.log(data))


function handleLikeButton(card) {
  if (card.checkLikeStatus()) {
    card.dislike();
    api.dislikeCard(card.getCardId())
      .then(data => {
        card.countLikes(data.likes)
      })
  } else {
    card.like();
    api.likeCard(card.getCardId())
      .then(data => {
        card.countLikes(data.likes)
      })
  }
}

function handleRemoveButton(card) {
  formToRemove.open();
  formToRemove.handleSubmit(() => {
    formToRemove.renderLoading(true)
    api.removeCard(card.getCardId())
    .then((data) => {
      console.log(data)
      card.removeCard();
      formToRemove.close()
    })
    .catch(err => console.log('Ошибка при удалении', err))
    .finally(() => formToRemove.renderLoading(false))
  })

}
