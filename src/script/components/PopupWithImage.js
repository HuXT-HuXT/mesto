import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__photo');
    this._popupLabel = this._popup.querySelector('.popup__phototitle');
  }

  open(label, link) {
    super.open();
    this._popupImage.src = link;
    this._popupImage.alt = label;
    this._popupLabel.textContent = label;
  }
}
