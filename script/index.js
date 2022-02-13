const wholePage = document.querySelector('.page');
const profile = wholePage.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const popup = wholePage.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');

let nameInput = popup.querySelector('.popup__input_name');
let aboutInput = popup.querySelector('.popup__input_about');

let oldName = profile.querySelector('.profile__name');
let oldAbout = profile.querySelector('.profile__short-about');

function showPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = oldName.textContent;
  aboutInput.value = oldAbout.textContent;
};

function hidePopup() {
  popup.classList.remove('popup_opened');
};

function formSubmitHandler(evt) {
  evt.preventDefault();

  let newName = nameInput.value;
  let newAbout = aboutInput.value;

  oldName.textContent = newName;
  oldAbout.textContent = newAbout;

  hidePopup();
};

editButton.addEventListener('click', showPopup);

closeButton.addEventListener('click', hidePopup);

popup.addEventListener('submit', formSubmitHandler);

