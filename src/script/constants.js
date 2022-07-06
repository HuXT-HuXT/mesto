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
const profileAvatarButton = profile.querySelector('.profile__photo-section');
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
const avatarPopupForm = wholePage.querySelector('.popup_type_avatar')
const popupWithPictureSelector = '.popup_type_photo';
const popupWithEditFormSelector = '.popup_type_edit';
const popupWithAddFormSelector = '.popup_type_add';
const popupWithAvatarSelector = '.popup_type_avatar';
const popupWithConfirmSelector = '.popup_type_remove';

const profileSelector = '.profile';
const userDataSelector = {
  userName: '.profile__name',
  userAbout: '.profile__short-about',
  userAvatar: '.profile__photo'
}
const cardPlaceSelector = '.elements';

const elementsSection = wholePage.querySelector('.elements');

const apiSettings = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
  headers: {
    authorization: '180a71ad-6645-4e7d-9f91-4115680a3fd9',
    'Content-Type': 'application/json'
  }
}

export { validationCriteria, profileButtonEdit, profileButtonAdd,
  editionPopupForm, additionPopupForm, popupElements, editionPopup, additionPopup, photoPopup,
  editionPopupNameInput, editionPopupAboutInput, additionPopupNameInput, additionPopupLinkInput,
  photoPopupPhoto, photoPopupTitle, elementsSection, profileOldName, profileOldAbout, popupWithPictureSelector,
  popupWithEditFormSelector, popupWithAddFormSelector, profileSelector, userDataSelector, cardPlaceSelector,
  apiSettings, popupWithAvatarSelector, profileAvatarButton, avatarPopupForm, popupWithConfirmSelector };
