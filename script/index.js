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

const editionPopup = wholePage.querySelector('.popup_type_edit');
const additionPopup = wholePage.querySelector('.popup_type_add');
const photoPopup = wholePage.querySelector('.popup_type_photo');
const editionPopupForm = editionPopup.querySelector('.popup__form');
const editionPopupTitle = editionPopup.querySelector('.popup__title');
const editionPopupButton = editionPopup.querySelector('.popup__submit');
const editionPopupNameInput = editionPopup.querySelector('.popup__input_field_name');
const editionPopupAboutInput = editionPopup.querySelector('.popup__input_field_about');
const editionPopupClose = editionPopup.querySelector('.popup__close-button');
const additionPopupForm = additionPopup.querySelector('.popup__form');
const additionPopupTitle = additionPopup.querySelector('.popup__title');
const additionPopupButton = additionPopup.querySelector('.popup__submit');
const additionPopupNameInput = additionPopup.querySelector('.popup__input_field_name');
const additionPopupLinkInput = additionPopup.querySelector('.popup__input_field_about');
const additionPopupClose = additionPopup.querySelector('.popup__close-button');
const photoPopupPhoto = photoPopup.querySelector('.popup__photo');
const photoPopupTitle = photoPopup.querySelector('.popup__phototitle');
const photoPopupClose = photoPopup.querySelector('.popup__close-button');

const elementsSection = wholePage.querySelector('.elements');

const template = document.querySelector('#element').content;

/*прошу прощения, сударь, что заставил Вас быть свидетелем проявленными мной костностью и
зашоренностью мышления.
надеюсь, сейчас удалось исправить допущенные промахи и оплошности, приблизившись к более-менее
удобоваримому варианту.
сомнения меня одолели в части необходимости отдельных функций для обработки кнопок - что предочесть
отдельная функция или стрелочное представление, выбор пал на отдельные функции.
не судите строго.*/

function handleEditButton() {
  editionPopupNameInput.value = profileOldName.textContent;
  editionPopupAboutInput.value = profileOldAbout.textContent;
  showPopup(editionPopup);
}

function handleAddButton() {
  showPopup(additionPopup);
}

function handlePhotoEnlargement(evt) {
  photoPopupTitle.textContent = evt.target.closest('.element').querySelector('.element__name').textContent;
  photoPopupPhoto.src = evt.target.closest('.element').querySelector('.element__photo').src;
  photoPopupPhoto.alt = evt.target.closest('.element').querySelector('.element__name').textContent;
  showPopup(photoPopup);
}

function showPopup(modalWindow) {
  modalWindow.classList.add('popup_opened');
};

function closePopup(evt) {
  evt.target.closest('.popup').classList.remove('popup_opened');
};

function handleEditForm(evt) {
  evt.preventDefault();
  profileOldName.textContent = editionPopupNameInput.value;
  profileOldAbout.textContent = editionPopupAboutInput.value;

  closePopup(evt);
}

function handleAddForm(evt) {
  evt.preventDefault();
  elementsSection.prepend(createCard(additionPopupNameInput.value, additionPopupLinkInput.value));

  closePopup(evt);
}

function createCard(Name, Link) {
  const elementElement = template.querySelector('.element');

  const newElement = elementElement.cloneNode(true);
  newElement.querySelector('.element__name').textContent = Name;
  newElement.querySelector('.element__photo').src = Link;
  newElement.querySelector('.element__photo').alt = Name;

  newElement.querySelector('.element__remove-button').addEventListener('click', handleRemoveButton);
  newElement.querySelector('.element__photo').addEventListener('click', handlePhotoEnlargement);
  newElement.querySelector('.element__like-button').addEventListener('click', handleHeartButton);

  return newElement;
};

function renderElement(Name, Link) {
  elementsSection.append(createCard(Name, Link));
};

function loadInitialCards(array) {
  for(let i = 0; i < array.length; i++) {
    Name = array[i].name;
    Link = array[i].link;

    renderElement(Name, Link);
  }
};

function handleHeartButton(evt) {
  evt.target.classList.toggle('element__like-button_enabled');
};

function handleRemoveButton(evt) {
  evt.target.closest('.element').remove();
};

loadInitialCards(initialCards);

profileButtonEdit.addEventListener('click', handleEditButton);

profileButtonAdd.addEventListener('click', handleAddButton);

editionPopupForm.addEventListener('submit', handleEditForm);

additionPopupForm.addEventListener('submit', handleAddForm);

photoPopupClose.addEventListener('click', closePopup);

additionPopupClose.addEventListener('click', closePopup);

editionPopupClose.addEventListener('click', closePopup);
