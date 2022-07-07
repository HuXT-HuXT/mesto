export default class Card {
  constructor({ item,  handleCardClick, handleLikeButton, handleRemoveButton }, myOwnId) {
    this._name = item.name;
    this._link = item.link;
    this._likes = item.likes;
    this._cardId = item._id;
    this._ownerId = item.owner._id;
    this._likeStatus = false;
    this._myOwnId = myOwnId;
    this.handleCardClick = handleCardClick;
    this.handleLikeButton = handleLikeButton;
    this.handleRemoveButton = handleRemoveButton;
  };

  _getTemplate() {
    const newElement = document
    .querySelector('#element')
    .content
    .querySelector('.element')
    .cloneNode(true);

    return newElement;
  }

  getCardId() {
    return this._cardId;
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  _checkOwner() {
    if (this._ownerId === this._myOwnId) {
      this._removeButton.classList.toggle('element__remove-button_shown');
    }
  }

  like() {
    this._likeButton.classList.add('element__like-button_enabled');
    this._likeStatus = true;
  }

  dislike() {
    this._likeButton.classList.remove('element__like-button_enabled');
    this._likeStatus = false;
  }

  _checkMyLike() {
    if (this._likes.some((item) => {
      return item._id === this._myOwnId;
    })) this.like();
  }

  checkLikeStatus() {
    return this._likeStatus;
  }

  countLikes(item) {
    this._element.querySelector('.element__likes-amount').textContent = item.length;
  }

  _setEventListeners() {
    this._removeButton.addEventListener('click', () => this.handleRemoveButton());

    this._likeButton.addEventListener('click', () => this.handleLikeButton());

    this._newElementPhoto.addEventListener('click', () => {
      this.handleCardClick(this._name, this._link);
    })
  }

  generateCard() {
    this._element = this._getTemplate();
    this._newElementPhoto = this._element.querySelector('.element__photo');
    this._removeButton = this._element.querySelector('.element__remove-button');
    this._likeButton = this._element.querySelector('.element__like-button');
    this._setEventListeners();

    this._element.querySelector('.element__name').textContent = this._name;
    this._newElementPhoto.src = this._link;
    this._newElementPhoto.alt = this._name;
    this._checkMyLike();
    this._checkOwner();
    this.countLikes(this._likes);

    return this._element;
  }
}

