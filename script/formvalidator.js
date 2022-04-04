const validationCriteria = {

  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
};

class FormValidator {
  constructor(obj, form) {

    this._formElement = form;
    this._inputSelector = obj.inputSelector;
    this._submitButtonSelector = obj.submitButtonSelector;
    this._inactiveButtonClass = obj.inactiveButtonClass;
    this._inputErrorClass = obj.inputErrorClass;
    this._errorClass = obj.errorClass;
    this._buttonElement = this._formElement.querySelector(`${this._submitButtonSelector}`);
    this._inputList = Array.from(this._formElement.querySelectorAll(`${this._inputSelector}`));
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(`${this._inactiveButtonClass}`);
      this._buttonElement.setAttribute("disabled", "");
    } else {
      this._buttonElement.classList.remove(`${this._inactiveButtonClass}`);
      this._buttonElement.removeAttribute("disabled", "");
    }
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
  };

  _showInputError(inputField, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputField.id}-error`);
    inputField.classList.add(`${this._inputErrorClass}`);
    errorElement.classList.add(`${this._errorClass}`);
    errorElement.textContent = errorMessage;
  };

  _hideInputError(inputField) {
    const errorElement = this._formElement.querySelector(`.${inputField.id}-error`);
    inputField.classList.remove(`${this._inputErrorClass}`);
    errorElement.classList.remove(`${this._errorClass}`);
    errorElement.textContent = '';
  };

  _disableSubmitButton() {
    this._buttonElement.setAttribute('disabled', '');
    this._buttonElement.classList.add('popup__submit_disabled');
  };

  _setEventListeners() {

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    })
  };

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._disableSubmitButton()
    })
    this._setEventListeners();
  };

};

export { validationCriteria, FormValidator };
