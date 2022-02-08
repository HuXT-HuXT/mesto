let wholePage = document.querySelector('.page');
let profile = wholePage.querySelector('.profile');
let editButton = profile.querySelector('.profile__editButton');
let profileEdit = wholePage.querySelector('.profileEdit');
let closeButton = profileEdit.querySelector('.profileEdit__closeButton');
let submitButton = profileEdit.querySelector('.profileEdit__submit');
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

console.log(nameInput.value);
console.log(aboutInput.value);

let x = aboutInput.value;

console.log(x);

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
submitButton.addEventListener('click', formSubmitHandler);
