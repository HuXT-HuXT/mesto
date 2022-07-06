import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ submitForm }, popupSelector) {
    super(popupSelector);
    this.submitForm = submitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._formFields = this._popupForm.querySelectorAll('.popup__input');
    this._submitButton = this._popupForm.querySelector('.popup__submit');
    this._submitButtonPos = this._submitButton.value
  }

  open(userData) {
    if (userData) {
      this._formFields.forEach((item) => {
        item.value = userData[item.name];
      })
    }
    super.open();
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  _getInputValues() {
    this._formValues = {};

    this._formFields.forEach((formField) => {
      this._formValues[formField.name] = formField.value;
    })
    console.log(this._formValues);
    return this._formValues;
  }

  renderLoading(switcher) {
    if (switcher) {
      this._submitButton.value = 'Сохранение...';
    } else {this._submitButton.value = this._submitButtonPos}
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.submitForm(this._getInputValues());
    })
  }
}
