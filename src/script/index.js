import './../pages/index.css';

import { initialCards, validationCriteria, profileButtonEdit, profileButtonAdd,
  editionPopupForm, additionPopupForm, popupElements, popupWithPictureSelector,
  popupWithEditFormSelector, popupWithAddFormSelector, profileSelector, userDataSelector,
  cardPlaceSelector} from './constants.js';

import { validateForm } from './utils.js';

import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import Section from './components/Section.js';
import Card from './components/Card.js';

const popupWithImage = new PopupWithImage(popupWithPictureSelector);

popupWithImage.setEventListeners();

function createCard(item) {
  const card = new Card({
    handleCardClick: (label, link) => {
      popupWithImage.open(label, link);
    }
  }, item.label, item.link);
  const cardElement = card.generateCard();

  return cardElement;
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item)

    cardList.appendItem(cardElement);
  }
},
cardPlaceSelector);

cardList.renderItems();

const userInfo = new UserInfo(profileSelector, userDataSelector);

const formForEdit = new PopupWithForm({
  submitForm: ({ userName, userAbout }) => {
    userInfo.setUserData(userName, userAbout);
  }
},
popupWithEditFormSelector);

formForEdit.setEventListeners();

const formForAdd = new PopupWithForm({
  submitForm: (item) => {
    cardList.prependItem(createCard(item));
  }
},
popupWithAddFormSelector)

formForAdd.setEventListeners();

validateForm(validationCriteria, editionPopupForm);

validateForm(validationCriteria, additionPopupForm);

profileButtonEdit.addEventListener('click', () => {
  formForEdit.open(userInfo.getUserData());
});

profileButtonAdd.addEventListener('click', () => {
  formForAdd.open();
})
