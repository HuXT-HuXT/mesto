const wholePage = document.querySelector('.page');
const profile = wholePage.querySelector('.profile');
const editButton = profile.querySelector('.profile__editButton');
const profileEdit = wholePage.querySelector('.profileEdit');
const closeButton = profileEdit.querySelector('.profileEdit__closeButton');
const submitButton = profileEdit.querySelector('.profileEdit__submit');
let nameInput = profileEdit.querySelector('.profileEdit__name');
let aboutInput = profileEdit.querySelector('.profileEdit__about');

editButton.addEventListener('click', () => {
  profileEdit.classList.add('profileEdit_opened');
  console.log('clicked');
});

closeButton.addEventListener('click', () => {
  profileEdit.classList.remove('profileEdit_opened');
  console.log('clicked');
});

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    let newName = nameInput.value;
    let newAbout = aboutInput.value;
    // Получите значение полей jobInput и nameInput из свойства value
    let oldName = profile.querySelector('.profile__name');
    let oldAbout = profile.querySelector('.profile__shortAbout');
    // Выберите элементы, куда должны быть вставлены значения полей
    oldName.textContent = newName;
    oldAbout.textContent = newAbout;
    // Вставьте новые значения с помощью textContent
    profileEdit.classList.remove('profileEdit_opened');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileEdit.addEventListener('submit', formSubmitHandler);


