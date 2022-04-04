import { additionPopupForm, editionPopup, additionPopup, editionPopupNameInput,
  editionPopupAboutInput, additionPopupNameInput, additionPopupLinkInput, elementsSection,
  profileOldName, profileOldAbout } from './constants.js';

import { Card } from './Card.js';

import { FormValidator } from './FormValidator.js';

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

export { handleEditButton, handleAddButton, showPopup, closePopup, handleEditForm,
  handleAddForm, createCard, renderElement, loadInitialCards, handleEscButton, validateForm };
