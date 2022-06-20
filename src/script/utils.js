import { FormValidator } from './components/FormValidator.js';

function validateForm(obj, form) {
  const evaluation = new FormValidator(obj, form);
  const evaluationForm = evaluation.enableValidation();
};

export { validateForm };
