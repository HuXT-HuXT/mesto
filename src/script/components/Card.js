/*import { photoPopup, photoPopupPhoto, photoPopupTitle } from "./constants.js";
import { showPopup } from "./utils.js";*/

export default class Card {
  constructor({ handleCardClick }, name, link) {
    this._name = name;
    this._link = link;
    this.handleCardClick = handleCardClick;
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
    this._element = null;
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

    this._element.querySelector('.element__remove-button').addEventListener('click', () => {
      this._handleRemoveButton();
    })

    this._element.querySelector('.element__like-button').addEventListener('click', (evt) => {
      this._handleHeartButton(evt);
    })

    this._newElementPhoto.addEventListener('click', () => {
      this.handleCardClick(this._name, this._link);
    })
  };

  generateCard() {
    this._element = this._getTemplate();
    this._newElementPhoto = this._element.querySelector('.element__photo');
    this._setEventListeners();

    this._element.querySelector('.element__name').textContent = this._name;
    this._newElementPhoto.src = this._link;
    this._newElementPhoto.alt = this._name;

    return this._element;
  }
}

