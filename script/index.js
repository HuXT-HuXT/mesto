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
const editButton = profile.querySelector('.profile__edit-button');
const addButton = profile.querySelector('.profile__add-button');

const popup = wholePage.querySelector('.popup');
const popupForm = popup.querySelector('.popup__form');
const popupTitle = popup.querySelector('.popup__title');
const closeButton = popup.querySelector('.popup__close-button');
const submitButton = popup.querySelector('.popup__submit');

const elementsSection = wholePage.querySelector('.elements');

const photoupElement = wholePage.querySelector('.photoup');
const photoupTitle = photoupElement.querySelector('.photoup__title');
const photoupPhoto = photoupElement.querySelector('.photoup__photo');
const photoupClose = photoupElement.querySelector('.photoup__close-button');


let nameInput = popup.querySelector('.popup__input_field_name');
let aboutInput = popup.querySelector('.popup__input_field_about');
let oldName = profile.querySelector('.profile__name');
let oldAbout = profile.querySelector('.profile__short-about');

loadInitialCards(initialCards);

function showPopup(evt) {
  if (evt.target.className === 'profile__edit-button') {
    popupTitle.innerHTML = 'Редактировать профиль';
    nameInput.placeholder = 'Имя';
    aboutInput.placeholder = 'Описание';
    nameInput.value = oldName.textContent;
    aboutInput.value = oldAbout.textContent;
  }
  if (evt.target.className === 'profile__add-button') {
    popupTitle.innerHTML = 'Новое место';
    nameInput.placeholder = 'Название';
    aboutInput.placeholder = 'Ссылка на картинку';
    nameInput.value = '';
    aboutInput.value = '';
    submitButton.classList.add('.popup__from_add');
  }
  popup.classList.add('popup_opened');
};

function hidePopup() {
  popup.classList.remove(`popup_opened`);
};

function hidePhotoup() {
  photoupElement.classList.remove(`photoup_opened`);
};

function formSubmitHandler(evt) {
  evt.preventDefault();

  if (submitButton.classList.contains('.popup__from_add')) {
    let newName = nameInput.value;
    let newLink = aboutInput.value;

    loadCards(newName, newLink);
    submitButton.classList.remove('.popup__from_add');
  } else {
    let newName = nameInput.value;
    let newAbout = aboutInput.value;

    oldName.textContent = newName;
    oldAbout.textContent = newAbout;
  }
  hidePopup();
};

function loadCards(newName, newLink) {
  const template = document.querySelector('#element').content;
  const elementElement = template.querySelector('.element');
  const elementsElement = wholePage.querySelector('.elements');

  const newElement = elementElement.cloneNode(true);
  newElement.querySelector('.element__name').textContent = newName;
  newElement.querySelector('.element__photo').src = newLink;
  newElement.querySelector('.element__photo').alt = newName;

  elementsElement.prepend(newElement);
};

function loadInitialCards(array) {
  for(let i = 0; i < array.length; i++) {
    newName = array[i].name;
    newLink = array[i].link;

    loadCards(newName, newLink);
  }
};

function elementHadler(evt) {
  const bullEye = evt.target;
  const parentElement = bullEye.closest('.element');
  if (bullEye.classList.contains('element__like-button')) {
    if (bullEye.classList.contains('element__like-button_disabled')) {
      bullEye.classList.remove('element__like-button_disabled');
      bullEye.classList.add('element__like-button_enabled');
    } else {
      bullEye.classList.remove('element__like-button_enabled');
      bullEye.classList.add('element__like-button_disabled');
    }
  };

  if (bullEye.classList.contains('element__remove-button')) {
    parentElement.remove();
  }

  if (bullEye.classList.contains('element__photo')) {
    const photoName = parentElement.querySelector('.element__name').textContent;
    const photoLink = parentElement.querySelector('.element__photo').src;

    photoupTitle.textContent = photoName;
    photoupPhoto.src = photoLink;
    photoupPhoto.alt = photoName;

    photoupElement.classList.add('photoup_opened');
  };
};

editButton.addEventListener('click', showPopup);

closeButton.addEventListener('click', hidePopup);

popupForm.addEventListener('submit', formSubmitHandler);

addButton.addEventListener('click', showPopup);

elementsSection.addEventListener('click', elementHadler);

photoupClose.addEventListener('click', hidePhotoup);
