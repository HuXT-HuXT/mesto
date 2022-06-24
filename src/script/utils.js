import { FormValidator } from './components/FormValidator.js';

function validateForm(validationConfig, form) {
  const evaluation = new FormValidator(validationConfig, form);
  const evaluationForm = evaluation.enableValidation();
};

export { validateForm };
