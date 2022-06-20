import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ submitForm }, popupSelector) {
    super(popupSelector);
    this.submitForm = submitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._formFields = this._popupForm.querySelectorAll('.popup__input');
  }

  open(userData) {
    this._formFields.forEach((item) => {
      item.value = userData[item.name];
    })
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

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.submitForm(this._getInputValues());
      this.close();
    })
  }
}
