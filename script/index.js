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
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
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

const editionPopup = wholePage.querySelector('.popup_type_edit');
const additionPopup = wholePage.querySelector('.popup_type_add');
const photoPopup = wholePage.querySelector('.popup_type_photo');
const editionPopupForm = editionPopup.querySelector('.popup__form');
const editionPopupTitle = editionPopup.querySelector('.popup__title');
const editionPopupButton = editionPopup.querySelector('.popup__submit');
const editionPopupNameInput = editionPopup.querySelector('.popup__input_field_name');
const editionPopupAboutInput = editionPopup.querySelector('.popup__input_field_about');
const additionPopupForm = additionPopup.querySelector('.popup__form');
const additionPopupTitle = additionPopup.querySelector('.popup__title');
const additionPopupButton = additionPopup.querySelector('.popup__submit');
const additionPopupNameInput = additionPopup.querySelector('.popup__input_field_name');
const additionPopupLinkInput = additionPopup.querySelector('.popup__input_field_about');
const photoPopupPhoto = photoPopup.querySelector('.popup__photo');
const photoPopupTitle = photoPopup.querySelector('.popup__phototitle');

const elementsSection = wholePage.querySelector('.elements');

const template = document.querySelector('#element').content;

function findPopup(evt) {
  let modalWindow = {};
  if (evt.target.classList.value === 'profile__edit-button') {
    modalWindow = editionPopup;
    editionPopupTitle.innerHTML = 'Редактировать профиль';
    editionPopupNameInput.placeholder = 'Имя';
    editionPopupAboutInput.placeholder = 'Описание';
    editionPopupNameInput.value = profileOldName.textContent;
    editionPopupAboutInput.value = profileOldAbout.textContent;
  };
  if (evt.target.classList.value === 'profile__add-button') {
    modalWindow = additionPopup;
    additionPopupTitle.innerHTML = 'Новое место';
    additionPopupNameInput.placeholder = 'Название';
    additionPopupLinkInput.placeholder = 'Ссылка на картинку';
    additionPopupNameInput.value = '';
    additionPopupLinkInput.value = '';
  };
  if (evt.target.className === 'element__photo') {
    const photoName = evt.target.closest('.element').querySelector('.element__name').textContent;
    const photoLink = evt.target.closest('.element').querySelector('.element__photo').src;

    photoPopupTitle.textContent = photoName;
    photoPopupPhoto.src = photoLink;
    photoPopupPhoto.alt = photoName;

    modalWindow = photoPopup;
  };
  showPopup(modalWindow);
};

function showPopup(modalWindow) {
  modalWindow.querySelector('.popup__close-button').addEventListener('click', closePopup);
  modalWindow.classList.add('popup_opened');
};

function closePopup(evt) {
  evt.target.closest('.popup').classList.remove('popup_opened');
};

function handleForm(evt) {
  evt.preventDefault();
  let classToCheck = evt.target.closest('.popup');

  if (classToCheck.classList.contains('popup_type_edit')) {

    let newName = editionPopupNameInput.value;
    let newAbout = editionPopupAboutInput.value;

    profileOldName.textContent = newName;
    profileOldAbout.textContent = newAbout;
  };

  if (classToCheck.classList.contains('popup_type_add')) {

    let newName = additionPopupNameInput.value;
    let newLink = additionPopupLinkInput.value;

    loadCards(newName, newLink);
  };

  closePopup(evt);
};

function loadCards(newName, newLink) {
  const elementElement = template.querySelector('.element');

  const newElement = elementElement.cloneNode(true);
  newElement.querySelector('.element__name').textContent = newName;
  newElement.querySelector('.element__photo').src = newLink;
  newElement.querySelector('.element__photo').alt = newName;
  /*add function!!!*/
  newElement.querySelector('.element__remove-button').addEventListener('click', handleRemoveButton);
  newElement.querySelector('.element__photo').addEventListener('click', findPopup);
  newElement.querySelector('.element__like-button').addEventListener('click', handleHeartButton);

  renderElement(newElement);
};

function renderElement(item) {
  elementsSection.prepend(item);
};

function loadInitialCards(array) {
  for(let i = 0; i < array.length; i++) {
    newName = array[i].name;
    newLink = array[i].link;

    loadCards(newName, newLink);
  }
};

function handleHeartButton(evt) {
  evt.target.classList.toggle('element__like-button_enabled');
};

function handleRemoveButton(evt) {
  evt.target.closest('.element').remove();
};

loadInitialCards(initialCards);

profileButtonEdit.addEventListener('click', findPopup);

profileButtonAdd.addEventListener('click', findPopup);

editionPopupForm.addEventListener('submit', handleForm);

additionPopupForm.addEventListener('submit', handleForm);
