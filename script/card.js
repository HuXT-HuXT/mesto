//const template = document.querySelector('#element').content;

import { showPopup, photoPopup, photoPopupPhoto, photoPopupTitle } from "./index.js";

class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
  };

  _getTemplate() {
    const newElement = document
    .querySelector('#element')
    .content
    .querySelector('.element')
    .cloneNode(true);

    return newElement;
  };

  _handleRemoveButton() {
    this._element.remove();
  };

  _handleHeartButton(evt) {
    evt.target.classList.toggle('element__like-button_enabled');
  };

  _handlePhotoEnlargement(name, link) {
    photoPopupTitle.textContent = name;
    photoPopupPhoto.src = link;
    photoPopupPhoto.alt = name;
    showPopup(photoPopup);
  };

  _setEventListeners() {
    //const removalButton = this._element.querySelector('.element__remove-button');
    //const heartButton = this._element.querySelector('.element__like-button');
    //const photoEnlargement = this._element.querySelector('.element__photo');

    this._element.querySelector('.element__remove-button').addEventListener('click', () => {
      this._handleRemoveButton();
    })

    this._element.querySelector('.element__like-button').addEventListener('click', (evt) => {
      this._handleHeartButton(evt);
    })

    this._element.querySelector('.element__photo').addEventListener('click', () => {
      this._handlePhotoEnlargement(this._name, this._link);
    })
  };
  //add methods: handleRemoveButton, handlePhotoEnlargement, handleHeartButton

  generateCard() {
    this._element = this._getTemplate();
    const newElementPhoto = this._element.querySelector('.element__photo');
    this._setEventListeners();

    this._element.querySelector('.element__name').textContent = this._name;
    newElementPhoto.src = this._link;
    newElementPhoto.alt = this._name;

    return this._element;
  }
}

export { Card };
