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

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card({
      handleCardClick: (name, link) => {
        const popupWithImage = new PopupWithImage(name, link, popupWithPictureSelector);
        popupWithImage.setEventListeners();
        popupWithImage.open();
      }
    }, item.name, item.link);
    const cardElement = card.generateCard();
    cardList.setItem(cardElement);
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
    const arrayItem = [];
    arrayItem.push(item);
    const newCard = new Section({
      items: arrayItem,
      renderer: (item) => {
        const card = new Card({
          handleCardClick: (label, link) => {
            const popupWithImage = new PopupWithImage(label, link, popupWithPictureSelector);
            popupWithImage.setEventListeners();
            popupWithImage.open();
          }
        }, item.label, item.link);
        const cardElement = card.generateCard();
        newCard.addNewItem(cardElement);
      }
    }, cardPlaceSelector);
    newCard.renderItems();
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
  const userData = {
    label: '',
    link: ''}
  formForAdd.open(userData);
})
