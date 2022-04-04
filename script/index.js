import { initialCards, validationCriteria, profileButtonEdit, profileButtonAdd,
  editionPopupForm, additionPopupForm, popupElements } from './constants.js';

import { handleEditButton, handleAddButton, closePopup, handleEditForm,
  handleAddForm, loadInitialCards, validateForm } from './utils.js';


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
