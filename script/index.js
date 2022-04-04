import { Card } from './Card.js';
import { validationCriteria, FormValidator } from './FormValidator.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Беэр-шева',
    link: 'https://i0.wp.com/lh3.googleusercontent.com/-3L7E-Hx6HbE/VVxtVN6WwuI/AAAAAAABQpU/41qr2NOA2Q8/s1200/i_b7_078_20150408_5D3_0284.jpg?w=1600&ssl=1'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const wholePage = document.querySelector('.page');

const profile = wholePage.querySelector('.profile');
const profileButtonEdit = profile.querySelector('.profile__edit-button');
const profileButtonAdd = profile.querySelector('.profile__add-button');
const profileOldName = profile.querySelector('.profile__name');
const profileOldAbout = profile.querySelector('.profile__short-about');

const popupElements = wholePage.querySelectorAll('.popup');

const editionPopup = wholePage.querySelector('.popup_type_edit');
const additionPopup = wholePage.querySelector('.popup_type_add');
const photoPopup = wholePage.querySelector('.popup_type_photo');
const editionPopupForm = editionPopup.querySelector('.popup__form');
//const editionPopupTitle = editionPopup.querySelector('.popup__title');
const editionPopupButton = editionPopup.querySelector('.popup__submit');
const editionPopupNameInput = editionPopup.querySelector('.popup__input_field_name');
const editionPopupAboutInput = editionPopup.querySelector('.popup__input_field_about');
//const editionPopupClose = editionPopup.querySelector('.popup__close-button');
const additionPopupForm = additionPopup.querySelector('.popup__form');
//const additionPopupTitle = additionPopup.querySelector('.popup__title');
const additionPopupButton = additionPopup.querySelector('.popup__submit');
const additionPopupNameInput = additionPopup.querySelector('.popup__input_field_name');
const additionPopupLinkInput = additionPopup.querySelector('.popup__input_field_about');
//const additionPopupClose = additionPopup.querySelector('.popup__close-button');
const photoPopupPhoto = photoPopup.querySelector('.popup__photo');
const photoPopupTitle = photoPopup.querySelector('.popup__phototitle');
//const photoPopupClose = photoPopup.querySelector('.popup__close-button');

//const template = document.querySelector('#element').content;

const elementsSection = wholePage.querySelector('.elements');

function handleEditButton() {
  editionPopupNameInput.value = profileOldName.textContent;
  editionPopupAboutInput.value = profileOldAbout.textContent;
  showPopup(editionPopup);
};

function handleAddButton() {
  showPopup(additionPopup);
};

function showPopup(modalWindow) {
  modalWindow.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscButton);
};

function closePopup(modalWindow) {
  modalWindow.classList.remove('popup_opened');  
  document.removeEventListener('keydown', handleEscButton);
};

function handleEditForm(evt) {
  evt.preventDefault();
  profileOldName.textContent = editionPopupNameInput.value;
  profileOldAbout.textContent = editionPopupAboutInput.value;

  closePopup(editionPopup);
};

function handleAddForm(evt) {
  evt.preventDefault();
  elementsSection.prepend(createCard(additionPopupNameInput.value, additionPopupLinkInput.value));
  additionPopupForm.reset();

  closePopup(additionPopup);
};

function createCard(name, link) {
  const card = new Card(name, link);
  const cardElement = card.generateCard();

  return cardElement;
};

function renderElement(name, link) {
  elementsSection.append(createCard(name, link));
};

function loadInitialCards(array) {
  array.forEach((element) => {
    const name = element.name;
    const link = element.link;

    renderElement(name, link);
  })
};

function handleEscButton(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

function validateForm(obj, form) {
  const evaluation = new FormValidator(obj, form);
  const evaluationForm = evaluation.enableValidation();
};

validateForm(validationCriteria, editionPopupForm);

validateForm(validationCriteria, additionPopupForm);

loadInitialCards(initialCards);

profileButtonEdit.addEventListener('click', handleEditButton);

profileButtonAdd.addEventListener('click', handleAddButton);

editionPopupForm.addEventListener('submit', handleEditForm);

additionPopupForm.addEventListener('submit', handleAddForm);

popupElements.forEach((popupElement) => {
  popupElement.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
      closePopup(popupElement);
    }
  });
});

export { showPopup, photoPopup, photoPopupPhoto, photoPopupTitle, additionPopupButton };
