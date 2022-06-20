import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(pictureName, pictureLink, popupSelector) {
    super(popupSelector);
    this._pictureName = pictureName;
    this._pictureLink = pictureLink;
    this._popupImage = this._popup.querySelector('.popup__photo');
    this._popupLabel = this._popup.querySelector('.popup__phototitle');
  }

  open() {
    super.open();
    this._popupImage.src = this._pictureLink;
    this._popupImage.alt = this._pictureName;
    this._popupLabel.textContent = this._pictureName;
  }

  close() {
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
