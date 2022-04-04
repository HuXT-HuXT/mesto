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

const validationCriteria = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
};

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
//const editionPopupButton = editionPopup.querySelector('.popup__submit');
const editionPopupNameInput = editionPopup.querySelector('.popup__input_field_name');
const editionPopupAboutInput = editionPopup.querySelector('.popup__input_field_about');
//const editionPopupClose = editionPopup.querySelector('.popup__close-button');
const additionPopupForm = additionPopup.querySelector('.popup__form');
//const additionPopupTitle = additionPopup.querySelector('.popup__title');
//const additionPopupButton = additionPopup.querySelector('.popup__submit');
const additionPopupNameInput = additionPopup.querySelector('.popup__input_field_name');
const additionPopupLinkInput = additionPopup.querySelector('.popup__input_field_about');
//const additionPopupClose = additionPopup.querySelector('.popup__close-button');
const photoPopupPhoto = photoPopup.querySelector('.popup__photo');
const photoPopupTitle = photoPopup.querySelector('.popup__phototitle');
//const photoPopupClose = photoPopup.querySelector('.popup__close-button');

//const template = document.querySelector('#element').content;

const elementsSection = wholePage.querySelector('.elements');

export { initialCards, validationCriteria, profileButtonEdit, profileButtonAdd,
  editionPopupForm, additionPopupForm, popupElements, editionPopup, additionPopup, photoPopup,
  editionPopupNameInput, editionPopupAboutInput, additionPopupNameInput, additionPopupLinkInput,
  photoPopupPhoto, photoPopupTitle, elementsSection, profileOldName, profileOldAbout };
