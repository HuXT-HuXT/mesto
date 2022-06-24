const initialCards = [
  {
    label: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    label: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    label: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    label: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    label: 'Беэр-шева',
    link: 'https://i0.wp.com/lh3.googleusercontent.com/-3L7E-Hx6HbE/VVxtVN6WwuI/AAAAAAABQpU/41qr2NOA2Q8/s1200/i_b7_078_20150408_5D3_0284.jpg?w=1600&ssl=1'
  },
  {
    label: 'Байкал',
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
const editionPopupNameInput = editionPopup.querySelector('.popup__input_field_name');
const editionPopupAboutInput = editionPopup.querySelector('.popup__input_field_about');
const additionPopupForm = additionPopup.querySelector('.popup__form');
const additionPopupNameInput = additionPopup.querySelector('.popup__input_field_name');
const additionPopupLinkInput = additionPopup.querySelector('.popup__input_field_about');
const photoPopupPhoto = photoPopup.querySelector('.popup__photo');
const photoPopupTitle = photoPopup.querySelector('.popup__phototitle');
//const photoPopupClose = photoPopup.querySelector('.popup__close-button');
//const additionPopupClose = additionPopup.querySelector('.popup__close-button');
//const additionPopupTitle = additionPopup.querySelector('.popup__title');
//const additionPopupButton = additionPopup.querySelector('.popup__submit');
//const editionPopupClose = editionPopup.querySelector('.popup__close-button');
//const template = document.querySelector('#element').content;
const popupWithPictureSelector = '.popup_type_photo';
const popupWithEditFormSelector = '.popup_type_edit';
const popupWithAddFormSelector = '.popup_type_add';
const profileSelector = '.profile';
const userDataSelector = {
  userName: '.profile__name',
  userAbout: '.profile__short-about'
}
const cardPlaceSelector = '.elements';

const elementsSection = wholePage.querySelector('.elements');

export { initialCards, validationCriteria, profileButtonEdit, profileButtonAdd,
  editionPopupForm, additionPopupForm, popupElements, editionPopup, additionPopup, photoPopup,
  editionPopupNameInput, editionPopupAboutInput, additionPopupNameInput, additionPopupLinkInput,
  photoPopupPhoto, photoPopupTitle, elementsSection, profileOldName, profileOldAbout, popupWithPictureSelector,
  popupWithEditFormSelector, popupWithAddFormSelector, profileSelector, userDataSelector, cardPlaceSelector};
