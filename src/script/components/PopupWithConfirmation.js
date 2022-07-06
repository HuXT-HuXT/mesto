import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._submitButton = this._popupForm.querySelector('.popup__submit');
    this._submitButtonPos = this._submitButton.value;
  }

  renderLoading(switcher) {
    if (switcher) {
      this._submitButton.value = 'Удаление...';
    } else {this._submitButton.value = this._submitButtonPos}
  }

  handleSubmit(removeCardFunction) {
    this.removeCardFunction = removeCardFunction;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.removeCardFunction();
    })
  }
}
