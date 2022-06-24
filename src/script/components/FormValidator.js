class FormValidator {
  constructor(validationConfig, form) {

    this._formElement = form;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
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
    this._buttonElement.classList.add(`${this._inactiveButtonClass}`);
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

export { FormValidator };
